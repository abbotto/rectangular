"use strict";

const fs = require("fs");
const vendorJSPath = "dist/vendor.js";
const EOL = require("os").EOL;
const setPath = require("./set.path.js");
const getPath = require("./get.path.js");

// Add tmpJSPath to the compile list
const vendorFiles = setPath(require(__dirname + "/../tmp/dev/asset/vendor.js.json"));

// Push the file contents into an array
const compileScripts = (files) => {
	const script = [];
	const n = files.length;
	let i = 0;

	// Prevent minified files from cramming together
	for (; i < n; i += 1) {
		script.push(fs.readFileSync(files[i], "utf8"));
	}

	// Prevent minified files from cramming together
	// and breaking as a result
	return script.join(EOL + EOL);
};

// Write the output to a file
fs.writeFileSync(vendorJSPath, compileScripts(vendorFiles), "utf8");
