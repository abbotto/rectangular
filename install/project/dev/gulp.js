"use strict";

const gulp = require("gulp");
const bump = require("gulp-bump");

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

gulp.task("default", []);
