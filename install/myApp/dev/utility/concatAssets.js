"use strict";

const EOL = require("os").EOL;
const fs = require("fs");

module.exports = function concatAssets(files) {
	const script = [];
	const n = files.length;
	let i = 0;
	
	for (; i < n; i += 1) {
		script.push(fs.readFileSync(files[i], "utf8"));
	}
	
	// Prevent minified files from cramming together
	// and breaking as a result
	return script.join(EOL + EOL);
};
