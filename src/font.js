"use strict";

const fs = require("fs");
const glob = require("glob-concat");
const parseAssets = require(__dirname + "/utility/parseAssets.js");
const sh = require("shellcmd");

module.exports = function font(deps, root) {
	const fonts = parseAssets(deps);
	const outputDir = root + "/dist/fonts";
	const isDest = fs.existsSync(outputDir);
	
	fonts.forEach((filePath, i) => {
		fonts[i] = filePath.replace("./", root + "/");
	});
	
	const fontFiles = glob.sync(fonts);

	isDest
		? sh("rm -rf " + outputDir + " && mkdir " + outputDir)
		: sh("mkdir " + outputDir)
	;

	fontFiles.length && fontFiles.forEach((font) => {
		font = font.replace("./", root + "/");
		sh("cp " + font + " " + root + "/dist/fonts/");
	});
};
