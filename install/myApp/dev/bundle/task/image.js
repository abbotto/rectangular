"use strict";

const glob = require("glob-concat");
const sh = require("shelljs");

module.exports = function image() {
	const imgFiles = glob.sync(["app/**/*.{png,svg,jpg,jpeg,gif}"]);
	
	imgFiles && imgFiles.forEach((image) => {
		sh.exec("cp " + image + " " + "dist/images/");
	});
};
