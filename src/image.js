"use strict";

const fs = require("fs");
const glob = require("glob-concat");
const parseAssets = require(__dirname + "/utility/parseAssets.js");
const sh = require("shellcmd");

module.exports = function img(deps, root) {
	const images = parseAssets(deps);
	const outputDir = root + "/dist/fonts";
	const isDest = fs.existsSync(outputDir);
	
	images.forEach((filePath, i) => {
		images[i] = filePath.replace("./", root + "/");
	});
	
	const imgFiles = glob.sync(images);
	
	isDest
		? sh("rm -rf " + outputDir + " && mkdir " + outputDir)
		: sh("mkdir " + outputDir)
	;
	
	imgFiles.length && imgFiles.forEach((img) => {
		img = img.replace("./", root + "/");
		sh("cp " + img + " " + root + "/dist/images/");
	});
};
