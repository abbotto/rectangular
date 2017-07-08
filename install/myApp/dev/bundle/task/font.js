"use strict";

const glob = require("glob-concat");
const parseAssets = require("../../../dev/utility/parseAssets.js");
const sh = require("shelljs");

module.exports = function font(deps, root) {
	const fonts = parseAssets(deps);
	
	fonts.forEach((filePath, i) => {
		fonts[i] = filePath.replace("./", root + "/");
	});
	
	const fontFiles = glob.sync(fonts);

	fontFiles.length && fontFiles.forEach((font) => {
		font = font.replace("./", root + "/");
		sh.exec("cp " + font + " " + root + "/dist/fonts/");
	});
};
