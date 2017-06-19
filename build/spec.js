"use strict";

const sh = require("shelljs");
const finder = require("glob-concat");
const fs = require("fs");
const getPath = require("./utility/get.path.js");
const transpile = require("./script/transpile.js");

// Load environment variables
require("dotenv").config();

const es6Files = finder.sync([
	getPath() + "/node_modules/rectangular/tmp/app/**/*.js",
	getPath() + "/node_modules/rectangular/tmp/dev/**/test.*.js",
	getPath() + "/node_modules/rectangular/tmp/app/**/*.spec.js"
]);

transpile(es6Files);

// Push the file contents into an array
const script = [];
const n = es6Files.length;
let i = 0;

// Prevent minified files from cramming together
for (; i < n; i += 1) {
	script.push(
		fs.readFileSync(es6Files[i], "utf8")
	);
}

// Write the output to a file
fs.writeFileSync(
	"tmp/spec.js",
	script.join("\n\n").trim(),
		"utf8"
);

// Run through webpack
sh.exec("node_modules/.bin/webpack --config build/webpack/spec.config.js");
