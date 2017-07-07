"use strict";

const glob = require("glob-concat");
const sh = require("shelljs");

module.exports = function font(patterns) {
	const vendorFontFiles = require("dev/utility/parseAssets.js")(require("dev/assets/vendor.font.json"));

	const fontFiles = glob.sync(vendorFontFiles.concat(patterns || [
		"app/design/font/*.{ttf,woff,woff2,eot,svg}"
	]));
	
	fontFiles && fontFiles.forEach((font) => {
		sh.exec("cp " + font + " dist/fonts/");
	});
};
