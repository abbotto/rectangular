"use strict";

const sh = require("shelljs");
const finder = require("glob-concat");
const getPath = require("../utility/get.path.js");
const images = finder.sync([getPath() + "/app/**/*.{png,svg,jpg,jpeg,gif}"]);

if (images) {
	images.forEach((image) => {
		sh.exec("cp " + image + " " + getPath() + "/dist/images/");
	});
}
