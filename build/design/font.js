"use strict";

const sh = require("shelljs");
const finder = require("glob-concat");
const getPath = require("../utility/get.path.js");

const fonts = finder.sync([
	getPath() + "/node_modules/font-awesome/fonts/*.{ttf,woff,woff2,eot,svg}",
	getPath() + "/app/design/font/*.{ttf,woff,woff2,eot,svg}"
]);

if (fonts) {
	fonts.forEach((font) => {
		sh.exec("cp " + font + " " + getPath() + "/dist/fonts/");
	});
}
