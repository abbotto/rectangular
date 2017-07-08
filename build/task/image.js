"use strict";

const glob = require("glob-concat");
const sh = require("shelljs");
const imgFiles = glob.sync(["app/**/*.{png,svg,jpg,jpeg,gif}"]);

module.exports = function image() {
	imgFiles && imgFiles.forEach((image) => {
		sh.exec("cp " + image + " " + "dist/images/");
	});
};
