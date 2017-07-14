"use strict";

const concatAssets = require(__dirname + "/src/utility/concatAssets.js");
const fs = require("fs");
const parseAssets = require(__dirname + "/src/utility/parseAssets.js");

module.exports = function script(deps, root) {
	const scripts = parseAssets(deps);
	
	scripts.forEach((filePath, i) => {
		scripts[i] = filePath.replace("./", root + "/");
	});
	
	fs.writeFileSync(
		"dist/legacy.js",
		concatAssets(
			scripts
		), "utf8"
	);
};
