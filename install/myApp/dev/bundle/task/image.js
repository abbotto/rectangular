"use strict";

const fs = require("fs");
const glob = require("glob-concat");
const parseAssets = require("../../../dev/utility/parseAssets.js");
const sh = require("shelljs");

module.exports = function img(deps, root) {
	const images = parseAssets(deps);
	const outputDir = root + "/dist/fonts";
	const dest = fs.existsSync(outputDir);
	
	images.forEach((filePath, i) => {
		images[i] = filePath.replace("./", root + "/");
	});

	const imgFiles = glob.sync(images);
	
	dest && sh.exec("rm -rf " + outputDir + " && mkdir " + outputDir);
	!dest && sh.exec("mkdir " + outputDir);
	
	imgFiles.length && imgFiles.forEach((img) => {
		img = img.replace("./", root + "/");
		sh.exec("cp " + img + " " + root + "/dist/images/");
	});
};
