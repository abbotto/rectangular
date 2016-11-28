//--------------------------------
// Required
//--------------------------------
const gulp = require("gulp");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const exit = require("gulp-exit");

let specJS;
gulp.task("spec.asset", () => {
	specJS = require("./asset/spec.js.json");
});

gulp.task("spec.compile", ["spec.asset"], () => {
	return gulp.src(specJS)
	.pipe(babel())
	.pipe(concat("spec.js"))
	.on("error", console.log)
	.pipe(gulp.dest("./tmp/"))
	.pipe(exit());
});
