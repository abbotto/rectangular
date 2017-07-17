"use strict";

const gulp = require("gulp");
const bump = require("gulp-bump");

// Load environment variables
require("dotenv")
	.config()
;

const root = __dirname.slice(0, -4);

// Versioning
gulp
	.task("bump-major", () => {
		gulp
			.src([root + "/package.json"])
			.pipe(bump({type: "major"}))
			.pipe(gulp.dest(root))
		;
	})
;

gulp
	.task("bump-minor", () => {
		gulp
			.src([root + "/package.json"])
			.pipe(bump({type: "minor"}))
			.pipe(gulp.dest(root))
			;
	})
	;

gulp
	.task("bump-patch", () => {
		gulp
			.src([root + "/package.json"])
			.pipe(bump({type: "patch"}))
			.pipe(gulp.dest(root))
		;
	})
;

gulp.task("default", []);
