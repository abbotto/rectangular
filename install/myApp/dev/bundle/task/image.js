"use strict";

const glob = require("glob-concat");
const parseAssets = require("dev/utility/parseAssets.js");
const sh = require("shelljs");

module.exports = function image(deps) {
	const images = deps.image || require("deps.json").image;
	
	const imgFiles = glob.sync(
		parseAssets(
			images
		)
	);
	
	imgFiles.length && imgFiles.forEach((font) => {
		sh.exec("cp " + font + " dist/images/");
	});
};
