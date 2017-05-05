"use strict";

const finder = require("glob-concat");
const sh = require("shelljs");
const getPath = require("./get.path.js");
const images = finder.sync([getPath() + "/app/**/*.{png,svg,jpg,jpeg,gif}"]);

if (!!images) {
	images.forEach((image) => {
		sh.exec("cp " + image + " ./dist/images/");
	});
}
