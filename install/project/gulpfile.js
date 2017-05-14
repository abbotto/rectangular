"use strict";

const gulp = require("gulp");
const bump = require("gulp-bump");
const sh = require("shelljs");
const livereload = require("gulp-livereload");

// Load environment variables
require("dotenv")
	.config()
;

// Versioning
gulp
	.task("bump-major", () => {
		gulp
			.src(["./package.json"])
			.pipe(bump({type: "major"}))
			.pipe(gulp.dest("./"))
		;
	})
;

gulp
	.task("bump-minor", () => {
		gulp
			.src(["./package.json"])
			.pipe(bump({type: "minor"}))
			.pipe(gulp.dest("./"))
		;
	})
;

gulp
	.task("bump-patch", () => {
		gulp
			.src(["./package.json"])
			.pipe(bump({type: "patch"}))
			.pipe(gulp.dest("./"))
		;
	})
;

// ngDocs
const gulpDocs = require("gulp-ngdocs");

gulp
	.task("docs", [], () => {
		const options = {
			html5Mode: true,
			startPage: "/api",
			title: "App Docs",
			image: "path/to/image.png",
			imageLink: "http://domain.com",
			titleLink: "/api"
		};
		gulp
			.src(appJS)
			.pipe(gulpDocs.process(options))
			.pipe(gulp.dest("./docs"))
			.pipe(process.exit())
		;
	})
;

// Client Tasks
gulp
	.task("compile", () => {
		sh.exec("npm run compile");
		gulp
			.src(__filename)
			.pipe(livereload())
		;
	})
;

// Open the app in a browser
const open = require("gulp-open");

gulp
	.task("open", ["compile"], () => {
		gulp
		.src(__filename)
		.pipe(open({
			uri: "http://localhost:" + process.env.PORT + "/"
		}));
	})
;

// Watch files
const watch = require("gulp-watch");
const watchFiles = [
	"./app/**/*.scss",
	"./app/**/*.js",
	"./app/**/*.json",
	"./app/**/*.html",
	"./app/**/*.jsx",
	"./task/**/*.js",
	"./task/**/*.json"
];

// Development server
const nodemon = require("gulp-nodemon");

gulp
	.task("dev", cb => {
		let started = false;
		nodemon({
			script: "server.js",
			ext: "js",
			watch: "app/server"
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
	})
;
;

gulp.task("default", ["compile"]);
