"use strict";

const glob = require("glob-concat");
const parseAssets = require("../../../dev/utility/parseAssets.js");
const sh = require("shelljs");

module.exports = function img(deps, root) {
	const images = parseAssets(deps);

	images.forEach((filePath, i) => {
		images[i] = filePath.replace("./", root + "/");
	});

	const imgFiles = glob.sync(images);
	
	imgFiles.length && imgFiles.forEach((img) => {
		img = img.replace("./", root + "/");
		sh.exec("cp " + img + " " + root + "/dist/images/");
	});
};
