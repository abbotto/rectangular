const gulp = require("gulp");
const open = require("gulp-open");
const sass = require("gulp-sass");
const gutil = require("gulp-util");
const babel = require("gulp-babel");
const watch = require("gulp-watch");
const notify = require("gulp-notify");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const eslint = require("gulp-eslint");
const gulpDocs = require("gulp-ngdocs");
const replace = require("gulp-replace");
const include = require("gulp-include");
const nodemon = require("gulp-nodemon");
const filelist = require("gulp-filelist");
const prefix = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const livereload = require("gulp-livereload");
const ngConstants = require("gulp-ng-config");
const sourcemaps = require("gulp-sourcemaps");
const cacheHTML = require("gulp-angular-templatecache");
const fs = require("fs");
const sh = require("shelljs");
const b2v = require("buffer-to-vinyl");
const runTasks = require("run-sequence");
const spawn = require("child_process").spawn;
const events = require("events");
const eventEmitter = new events.EventEmitter();

//--------------------------------
// Load environment variables
//--------------------------------
require("dotenv").config();

//--------------------------------
// Intro
//--------------------------------
gulp.task("intro", () => {
	sh.exec("chmod +x ./task/script/intro.sh && ./task/script/intro.sh");
});

//--------------------------------
// File dependencies for the app
//--------------------------------
let vendorJS, appJS, vendorSCSS, appSCSS;
gulp.task("dependencies", () => {
	vendorJS = require("./task/asset/vendor.js.json");
	appJS = require("./task/asset/source.js.json");
	vendorSCSS = require("./task/asset/vendor.scss.json");
	appSCSS = require("./task/asset/source.scss.json");
});

//--------------------------------
// Clean-up
//--------------------------------
gulp.task("reset", () => {
	sh.rm("-rf", "tmp");
	sh.mkdir("tmp");
	sh.rm("-rf", "dist");
	sh.mkdir("dist");
	sh.mkdir("dist/fonts");
	sh.mkdir("dist/images");
	sh.mkdir("dist/downloads");
});

gulp.task("delint", () => {
	// ESLint ignores files with "node_modules" paths.
	// So, it's best to have gulp ignore the directory as well.
	// Also, Be sure to return the stream from the task;
	// Otherwise, the task may end before the stream has finished.
	return gulp.src(["./src/client/**/*.js"])
		// eslint() attaches the lint output to the "eslint" property
		// of the file object so it can be used by other modules.
		.pipe(eslint())
		// eslint.format() outputs the lint results to the console.
		// Alternatively use eslint.formatEach() (see Docs).
		.pipe(eslint.format())
		// To have the process exit with an error code (1) on
		// lint error, return the stream and pipe to failAfterError last.
		.pipe(eslint.failAfterError());
});

//--------------------------------
// Caching
//--------------------------------
gulp.task("constants", () => {
	return b2v.stream(new Buffer(JSON.stringify({
		"NODE_ENV": process.env.NODE_ENV,
		"LANGUAGE": process.env.LANGUAGE
	})), "constants.js")
		.pipe(ngConstants("app.constants"))
		.pipe(gulp.dest("./tmp"));
});

gulp.task("models", () => {
	return gulp.src([
		"./src/client/private/component/**/*.json",
		"./src/client/public/component/**/*.json"])
		.pipe(filelist("models.json"))
		.pipe(gulp.dest("./tmp"))
		.on("end", () => {
			const arr = require("./tmp/models.json");
			let key;
			const models = {};
			arr.forEach(function modelsLoop(path) {
				key = path
					.replace("src/client/", "")
					.replace("private/", "")
					.replace("public/", "")
					.replace("component/", "")
					.replace("model.", "")
				;
				models[key] = fs.readFileSync(path, "utf8");
			});
			return b2v.stream(new Buffer(JSON.stringify({
				"ngModel": models
			})), "models.js")
				.pipe(ngConstants("ngModels"))
				.pipe(gulp.dest("./tmp"));
		})
	;
});

gulp.task("cache-html", () => {
	return gulp.src([
		"src/client/**/*.tpl",
		"!src/client/public/component/master/master.tpl",
	])
	//.pipe(minify and preprocess the template html here)
	.pipe(cacheHTML({
		"module": "app.templates",
		"standalone": true
	}))
	// Remove the extension
	// from the template reference
	.pipe(replace("private/component/", ""))
	.pipe(replace("public/component/", ""))
	.on("error", console.log)
	.pipe(gulp.dest("./tmp"));
});

//--------------------------------
// Copy Files
//--------------------------------
gulp.task("copy-fonts", () => {
	return gulp.src([
		"./node_modules/font-awesome/fonts/*.{ttf,woff,woff2,eot,svg}"
	])
	.pipe(gulp.dest("./dist/fonts"));
});

gulp.task("copy-images", () => {
	return gulp.src([
		"./src/client/public/design/image/*.{png,jpg,jpeg,gif,svg,ico}"
	])
	.pipe(gulp.dest("./dist/images"));
});

gulp.task("copy-downloads", () => {
	return gulp.src([
		"./src/client/public/download/**/*.*"
	])
	.pipe(gulp.dest("./dist/downloads"));
});

//--------------------------------
// Compile Assets
//--------------------------------
gulp.task("compile-index", () => {
	let contents = fs.readFileSync("src/client/public/component/master/master.tpl").toString();
	// Inject Livereload
	if (process.env.NODE_ENV === "development") {
		contents = contents.replace(
			"</body>",
			"	<script src=\"http://localhost:35729/livereload.js\"></script>\n	</body>"
		);
	}
	fs.writeFile("./dist/index.html", contents);
});

gulp.task("compile-js", () => {
	return gulp.src(vendorJS)
	.pipe(concat("vendor.js"))
	.on("error", console.log)
	.pipe(gulp.dest("./tmp/"))
	.on("end", () => {
		return gulp.src(appJS)
		.pipe(babel())
		.pipe(concat("source.js"))
		.on("error", console.log)
		.pipe(gulp.dest("./tmp/"))
		.on("end", () => {
			return gulp.src([
				"./tmp/vendor.js",
				"./tmp/source.js"
			])
			.pipe(concat("app.js"))
			.on("error", console.log)
			.pipe(gulp.dest("./dist/"));
		});
	});
});

gulp.task("compile-scss", () => {
	return gulp.src(vendorSCSS)
	.pipe(concat("vendor.scss"))
	.pipe(gulp.dest("./tmp"))
	.on("end", () => {
		return gulp.src(appSCSS)
		.pipe(concat("source.scss"))
		.pipe(gulp.dest("./tmp"))
		.on("end", () => {
			return gulp.src([
				"./tmp/vendor.scss",
				"./tmp/source.scss"
			])
			.pipe(concat("app.scss"))
			.pipe(sass.sync())
			.pipe(prefix({
				"browsers": ["last 5 versions"],
				"cascade": false
			}))
			.pipe(cleanCSS({
				"compatibility": "*"
			}))
			.pipe(gulp.dest("./dist/"));
		});
	});
});

gulp.task("compile-docs", [], () => {
	const options = {
		"html5Mode": true,
		"startPage": "/api",
		"title": "App Docs",
		"image": "path/to/image.png",
		"imageLink": "http://domain.com",
		"titleLink": "/api"
	};
	gulp.src(appJS)
		.pipe(gulpDocs.process(options))
		.pipe(gulp.dest("./doc"))
	;
});

//--------------------------------
// Server tasks
//--------------------------------
gulp.task("server", cb => {
	let started = false;
	nodemon({
			// the script to run the app
		"script": "server.js",
		"ext": "js",
		"watch": "src/server"
	})
	.on("start", () => {
		// Avoid nodemon being started multiple times
		if (!started) {
			cb();
			started = true;
			livereload.listen();
		}
	})
	.on("restart", () => {
		livereload();
	});
});

//--------------------------------
// Client Tasks
//--------------------------------
gulp.task("compile", () => {
	runTasks(
		"intro",
		"reset",
		"delint",
		"models",
		"constants",
		"copy-fonts",
		"copy-images",
		"copy-downloads",
		"cache-html",
		"dependencies",
		"compile-index",
		"compile-js",
		"compile-scss"
	);
});

//--------------------------------
// Watch
//--------------------------------
const watchFiles = [
	"./src/client/**/*.scss",
	"./src/client/**/*.js",
	"./src/client/**/*.json",
	"./src/client/**/*.tpl",
	"./task/**/*.json"
];

gulp.task("open", () => {
	gulp.src(__filename)
		.pipe(open({
			"uri": "http://localhost:" + process.env.PORT + "/#/"
		}));
});

gulp.task("reload", () => {
	gulp.src(__filename).pipe(livereload());
});

gulp.task("compiled", () => {
	eventEmitter.emit("compiled");
});

eventEmitter.on("compiled", () => {
	gulp.start(["reload"]);
});

gulp.task("watchTasks", () => {
	runTasks(
		"delint",
		"models",
		"constants",
		"copy-fonts",
		"copy-images",
		"copy-downloads",
		"cache-html",
		"dependencies",
		"compile-index",
		"compile-js",
		"compile-scss",
		"compiled"
	);
});

gulp.task("monitor", ["compile", "server"], done => {
	gulp.watch(watchFiles, ["watchTasks"]);
	setTimeout(() => {
		gulp.start(["open"]);
		gulp.src(__filename).pipe(notify("application has loaded."));
		done();
	}, 1000);
});

gulp.task("default", ["compile"]);

