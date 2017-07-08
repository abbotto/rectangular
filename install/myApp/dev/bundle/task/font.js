"use strict";

const glob = require("glob-concat");
const parseAssets = require("dev/utility/parseAssets.js");
const sh = require("shelljs");

module.exports = function font(deps) {
	const fonts = deps.font || require("deps.json").font;
	
	const fontFiles = glob.sync(
		parseAssets(
			fonts
		)
	);
	
	fontFiles.length && fontFiles.forEach((font) => {
		sh.exec("cp " + font + " dist/fonts/");
	});
};
