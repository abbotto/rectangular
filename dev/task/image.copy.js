"use strict";

const finder = require("glob-concat");
const sh = require("shelljs");

const images = finder.sync([
	"app/client/**/*.{png,svg,jpg,jpeg,gif}",
	"tmp/src/app/client/**/*.{png,svg,jpg,jpeg,gif}"
]);

if (!!images) {
	images.forEach((image) => {
		sh.exec("cp " + image + " ./dist/images/");
	});
}
