"use strict";

const fs = require("fs");
const glob = require("glob-concat");
const parseAssets = require("../../../dev/utility/parseAssets.js");
const sh = require("shelljs");

module.exports = function font(deps, root) {
	const fonts = parseAssets(deps);
	const dest = fs.existsSync(root + "/dist/fonts");
	
	fonts.forEach((filePath, i) => {
		fonts[i] = filePath.replace("./", root + "/");
	});
	
	const fontFiles = glob.sync(fonts);

	dest && sh.exec("rm -rf " + root + "/dist/fonts");
	!dest && sh.exec("mkdir " + root + "/dist/fonts");

	fontFiles.length && fontFiles.forEach((font) => {
		font = font.replace("./", root + "/");
		sh.exec("cp " + font + " " + root + "/dist/fonts/");
	});
};
