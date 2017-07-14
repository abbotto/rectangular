"use strict";

const fs = require("fs");
const glob = require("glob-concat");
const parseAssets = require(__dirname + "/utility/parseAssets.js");
const sh = require("shelljs");

module.exports = function img(deps, root) {
	const images = parseAssets(deps);
	const outputDir = root + "/dist/fonts";
	const isDest = fs.existsSync(outputDir);
	
	images.forEach((filePath, i) => {
		images[i] = filePath.replace("./", root + "/");
	});
	
	const imgFiles = glob.sync(images);
	
	isDest
		? sh.exec("rm -rf " + outputDir + " && mkdir " + outputDir)
		: sh.exec("mkdir " + outputDir)
	;
	
	imgFiles.length && imgFiles.forEach((img) => {
		img = img.replace("./", root + "/");
		sh.exec("cp " + img + " " + root + "/dist/images/");
	});
};
