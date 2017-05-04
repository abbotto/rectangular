"use strict";

const finder = require("glob-concat");
const sh = require("shelljs");
const images = finder.sync([__dirname + "/../../tmp/dev/app/**/*.{png,svg,jpg,jpeg,gif}"]);

if (!!images) {
	images.forEach((image) => {
		sh.exec("cp " + image + " ./dist/images/");
	});
}
