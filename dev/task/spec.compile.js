"use strict";

(() => {
	const sh = require("shelljs");
	const finder = require("glob-concat");
	const fs = require("fs");
	const projectPath = require("./project.path.js");

	// Load environment variables
	require("dotenv").config();

	// Cross-platform newline
	const EOL = require("os").EOL;

	// Output paths
	const tmpSpecJS = "tmp/spec.js";
	const scripts = projectPath(finder.sync(require(__dirname + "/../../../../dev/asset/spec.js.json")));

	// Push the file contents into an array
	const script = [];
	const n = scripts.length;
	let i = 0;

	// Prevent minified files from cramming together
	for (; i < n; i += 1) {
		script.push(fs.readFileSync(scripts[i], "utf8"));
	}

	// Prevent minified files from cramming together
	// and breaking as a result
	const output = script.join("\n\n").trim();

	// Write the output to a file
	fs.writeFileSync(tmpSpecJS, output, "utf8");

	// Convert ES6 to ES5
	sh.exec("node_modules/babel-cli/bin/babel.js " + tmpSpecJS + " --out-file " + tmpSpecJS);
})();
