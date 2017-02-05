"use strict";

(() => {
	const sh = require("shelljs");
	const finder = require("glob-concat");
	const fs = require("fs");

	// Load environment variables
	require("dotenv").config();

	// Cross-platform newline
	const EOL = require("os").EOL;

	// Output paths
	const tmpSpecJS = "tmp/spec.js";

	const scripts = finder.sync(require("./asset/spec.js.json"));

	// Concatenate and clean-up the output
	let script, output;
	const n = scripts.length;
	let i = 0;

	for (; i < n; i+=1) {
		script = fs.readFileSync(scripts[i], "utf8");
		output += (script.trim());
	}

	// Write the output to a file
	fs.appendFile(tmpSpecJS, output);

	// Convert ES6 to ES5
	sh.exec("cat " + tmpSpecJS + " | node_modules/babel-cli/bin/babel.js > " + tmpSpecJS);
})();
