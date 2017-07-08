"use strict";

const glob = require("glob-concat");
const sh = require("shelljs");
const vendorFontFiles = require("dev/utility/parseAssets.js")(require("dev/assets/vendor.font.json"));

const fontFiles = glob.sync(vendorFontFiles.concat([
	"app/design/font/*.{ttf,woff,woff2,eot,svg}"
]));

module.exports = function font() {
	fontFiles && fontFiles.forEach((font) => {
		sh.exec("cp " + font + " dist/fonts/");
	});
};
