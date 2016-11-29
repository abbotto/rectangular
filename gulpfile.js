const gulp = require("gulp");
const sh = require("shelljs");
const livereload = require("gulp-livereload");

//--------------------------------
// Load environment variables
//--------------------------------
require("dotenv").config();

//--------------------------------
// ngDocs
//--------------------------------
const gulpDocs = require("gulp-ngdocs");
gulp.task("docs", [], () => {
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
		.pipe(gulp.dest("./docs"))
		.pipe(exit());
	;
});

//--------------------------------
// Client Tasks
//--------------------------------
gulp.task("compile", () => {
	sh.exec("node task/compile.js");
	gulp.src(__filename)
	.pipe(livereload());
});

//--------------------------------
// Open the app in a browser
//--------------------------------
const open = require("gulp-open");
gulp.task("open", ["compile"], () => {
	gulp.src(__filename)
	.pipe(open({
		"uri": "http://localhost:" + process.env.PORT + "/#/"
	}));
});

//--------------------------------
// Watch files
//--------------------------------
const watch = require("gulp-watch");
const watchFiles = [
	"./src/client/**/*.scss",
	"./src/client/**/*.js",
	"./src/client/**/*.json",
	"./src/client/**/*.html",
	"./task/**/*.js",
	"./task/**/*.json"
];

//--------------------------------
// Server
//--------------------------------
const nodemon = require("gulp-nodemon");
gulp.task("dev", cb => {	
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
			gulp.watch(watchFiles, ["compile"]);
			gulp.start(["open"]);
		}
	})
	.on("restart", () => {
		livereload();
	});
});

gulp.task("default", ["compile"]);
