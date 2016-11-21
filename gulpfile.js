const gulp = require("gulp");
const open = require("gulp-open");
const sass = require("gulp-sass");
const gutil = require("gulp-util");
const babel = require("gulp-babel");
const watch = require("gulp-watch");
const notify = require("gulp-notify");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
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

const fs = require("fs");
const sh = require("shelljs");
const b2v = require("buffer-to-vinyl");
const runTasks = require("run-sequence");
const spawn = require("child_process").spawn;
const events = require("events");
const eventEmitter = new events.EventEmitter();
let assets;

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
let vendorJS, appJS, vendorSCSS, appSCSS, specJS;
gulp.task("dependencies", () => {
	appJS = require("./task/asset/source.js.json");
	appSCSS = require("./task/asset/source.scss.json");
	specJS = require("./task/asset/spec.js.json");
	vendorJS = require("./task/asset/vendor.js.json");
	vendorSCSS = require("./task/asset/vendor.scss.json");
});

//--------------------------------
// Clean-up
//--------------------------------
gulp.task("reset", ["dependencies"], () => {
	sh.rm("-rf", "tmp");
	sh.mkdir("tmp");
	sh.rm("-rf", "dist");
	sh.mkdir("dist");
	sh.mkdir("dist/fonts");
	sh.mkdir("dist/images");
});

gulp.task("delint", () => {
	sh.exec("npm run delint");
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
		"./src/client/design/image/*.{png,jpg,jpeg,gif,svg,ico}"
	])
	.pipe(gulp.dest("./dist/images"));
});

gulp.task("copy-tasks", () => {
	runTasks(
		"copy-fonts",
		"copy-images"
	);
});

//--------------------------------
// Compile Assets
//--------------------------------
gulp.task("compile-index", () => {
	let contents = fs.readFileSync("src/client/component/core/master/master.tpl").toString();
	// Inject Livereload
	if (process.env.NODE_ENV === "development") {
		contents = contents.replace(
			"</body>",
			"	<script src=\"http://localhost:35729/livereload.js\"></script>\n	</body>"
		);
	}
	fs.writeFile("./dist/index.html", contents);
});

gulp.task("compile-scss", () => {
	assets = vendorSCSS;
	assets = assets.concat(appSCSS);
	return gulp.src(assets)
	.pipe(concat("app.scss"))
	.pipe(sass.sync())
	.pipe(prefix({
		"browsers": ["last 5 versions"],
		"cascade": false
	}))
	.pipe(cleanCSS({
		"compatibility": "*"
	}))
	.pipe(gulp.dest("./dist"));
});

gulp.task("compile-js", () => {
	return gulp.src(appJS)
	.pipe(babel())
	// .pipe(babel({"compact": false}))
	// .pipe(uglify({"mangle":false}))
	.pipe(concat("source.js"))
	.on("error", console.log)
	.pipe(gulp.dest("./tmp/"))
	.on("end", () => {
		vendorJS.push("./tmp/source.js");
		return gulp.src(vendorJS)
		.pipe(concat("app.js"))
		.on("error", console.log)
		.pipe(gulp.dest("./dist/"))
	});
});

gulp.task("compile-tests", () => {
	return gulp.src(specJS)
	.pipe(babel())
	.pipe(concat("spec.js"))
	.on("error", console.log)
	.pipe(gulp.dest("./tmp/"));
});

gulp.task("compile-tasks", () => {
	runTasks(
		"compile-index",
		"compile-scss",
		"compile-js",
		"compile-tests"
	);
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
			gulp.start(["compile"]);
			gulp.start(["open"]);
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
		"cache-tasks",
		"copy-tasks",
		"delint",
		"compile-tasks"
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

gulp.task("reload", (done) => {
	gulp.src(__filename).pipe(livereload());
	done();
});

gulp.task("watchTasks", () => {
	runTasks(
		"intro",
		"reset",
		"cache-tasks",
		"copy-tasks",
		"delint",
		"compile-tasks",
		"reload"
	);
});

gulp.task("open", () => {
	gulp.src(__filename)
	.pipe(open({
		"uri": "http://localhost:" + process.env.PORT + "/#/"
	}));
});

gulp.task("monitor", ["server"], done => {
	gulp.watch(watchFiles, ["watchTasks"]);
	gulp.src(__filename).pipe(notify("application has loaded."));
});

gulp.task("default", ["compile"]);
