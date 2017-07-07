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
			.src("SOME_PATH")
			.pipe(gulpDocs.process(options))
			.pipe(gulp.dest("./docs"))
			.pipe(process.exit())
		;
	})
;

// Client Tasks
gulp
	.task("build", () => {
		sh.exec("npm run build");
	})
;

gulp
	.task("build-js", () => {
		sh.exec("npm run build-js");
		gulp
			.src(__filename)
			.pipe(livereload())
		;
	})
;

gulp
	.task("build-vendor", () => {
		sh.exec("npm run build-vendor");
		gulp
			.src(__filename)
			.pipe(livereload())
		;
	})
;

gulp
	.task("build-scss", () => {
		sh.exec("npm run build-scss");
		gulp
			.src(__filename)
			.pipe(livereload())
		;
	})
;

// Open the app in a browser
const open = require("gulp-open");

gulp
	.task("open", ["build"], () => {
		gulp
		.src(__filename)
		.pipe(open({
			uri: "http://localhost:" + process.env.PORT + "/"
		}));
	})
;

// Watch files
const watchAppScripts = [
	"!./app/**/*.spec.js",
	"./app/**/*.js",
	"./app/**/*.json",
	"./app/**/*.html",
	"./app/**/*.jsx",
	"./dev/**/service.ng.json"
];

const watchVendorScripts = [
	"./dev/**/vendor.global.js.json"
];

const watchStyles = [
	"./app/**/*.scss",
	"./dev/**/app.scss.json",
	"./dev/**/vendor.scss.json"
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
				gulp.watch(watchAppScripts, ["build-js"]);
				gulp.watch(watchVendorScripts, ["build-vendor"]);
				gulp.watch(watchStyles, ["build-scss"]);
				gulp.start(["open"]);
			}
		})
		.on("restart", () => {
			livereload();
		});
	})
;

gulp.task("default", ["build"]);
