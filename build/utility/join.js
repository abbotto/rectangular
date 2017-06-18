"use strict";

const fs = require("fs");
const EOL = require("os").EOL;

// Push the file contents into an array
module.exports = function join(files) {
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
