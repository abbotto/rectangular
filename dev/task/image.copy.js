"use strict";

const finder = require("glob-concat");
const sh = require("shelljs");
const images = finder.sync([__dirname.split("/node_modules")[0] + "//dev/app/**/*.{png,svg,jpg,jpeg,gif}"]);

if (!!images) {
	images.forEach((image) => {
		sh.exec("cp " + image + " ./dist/images/");
	});
}
