"use strict";

const finder = require("glob-concat");
const sh = require("shelljs");

const fonts = finder.sync([
	__dirname.split("/node_modules")[0] + "//node_modules/font-awesome/fonts/*.{ttf,woff,woff2,eot,svg}",
	__dirname.split("/node_modules")[0] + "//dev/app/shared/design/font/*.{ttf,woff,woff2,eot,svg}"
]);

if (!!fonts) {
	fonts.forEach((font) => {
		sh.exec("cp " + font + " ./dist/fonts/");
	});
}
