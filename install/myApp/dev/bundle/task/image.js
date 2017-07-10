"use strict";

const fs = require("fs");
const glob = require("glob-concat");
const parseAssets = require("../../../dev/utility/parseAssets.js");
const sh = require("shelljs");

module.exports = function img(deps, root) {
	const images = parseAssets(deps);
	const dest = fs.existsSync(root + "/dist/images");
	
	images.forEach((filePath, i) => {
		images[i] = filePath.replace("./", root + "/");
	});

	const imgFiles = glob.sync(images);
	
	dest && sh.exec("rm -rf " + root + "/dist/images");
	!dest && sh.exec("mkdir " + root + "/dist/images");
	
	imgFiles.length && imgFiles.forEach((img) => {
		img = img.replace("./", root + "/");
		sh.exec("cp " + img + " " + root + "/dist/images/");
	});
};
