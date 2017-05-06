"use strict";

const finder = require("glob-concat");
const sh = require("shelljs");
const getPath = require("./get.path.js");

const fonts = finder.sync([
	getPath() + "/node_modules/font-awesome/fonts/*.{ttf,woff,woff2,eot,svg}",
	getPath() + "/app/shared/design/font/*.{ttf,woff,woff2,eot,svg}"
]);

if (!!fonts) {
	fonts.forEach((font) => {
		sh.exec("cp " + font + " ./dist/fonts/");
	});
}