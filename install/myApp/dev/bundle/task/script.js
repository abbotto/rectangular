"use strict";

const concatAssets = require("dev/utility/concatAssets.js");
const fs = require("fs");
const parseAssets = require("dev/utility/parseAssets.js");
const sh = require("shelljs");

module.exports = function script() {
	const script = require("deps.json").script;
	
	fs.writeFileSync(
		"dist/legacy.js",
		concatAssets(
			parseAssets(
				script
			)
		), "utf8"
	);
	
	sh.exec("gzip -c -8 " + "dist/legacy.js > dist/legacy.js.gz");
};
