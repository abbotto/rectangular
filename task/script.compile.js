"use strict";

const sh = require("shelljs");
const finder = require("glob-concat");
const fs = require("fs");

// Load environment variables
require("dotenv").config();

// Pre-flight tasks
sh.exec("node_modules/eslint/bin/eslint.js --fix src/");
sh.exec("node task/service.compile.js");
sh.exec("node task/constant.cache.js");
sh.exec("node task/route.compile.js");
sh.exec("node task/spec.compile.js");
sh.exec("node task/model.cache.js");
sh.exec("node task/html.cache.js");

// Output paths
const appJS = "dist/app.js";
const mapJS = "dist/app.js.map";
const tmpJS = "tmp/source.js";

// Cross-platform newline
const EOL = require("os").EOL;

// Locate scripts to compile
const srcJS = finder.sync(require("./asset/source.js.json"));
let scripts = finder.sync(require("./asset/vendor.js.json"));

const tmpScripts = [
	"tmp/constants.js",
	"tmp/models.js",
	"tmp/templates.js"
];

scripts.push(tmpJS);
scripts = scripts.concat(tmpScripts);

// Write source code
// to temporary file
sh.cat(srcJS).to(tmpJS);

// Convert ES6 to ES5
sh.exec("node_modules/babel-cli/bin/babel.js " + tmpJS + " --out-file " + tmpJS);

// Generate a source map in dev mode
const sourceMap = (process.env.NODE_ENV === "development") ? "--source-map " + mapJS + " " : "";

// Minify the output
sh.exec("node_modules/uglify-js/bin/uglifyjs " + tmpJS + " " + sourceMap + "-o " + tmpJS);

// Concatenate and clean-up the output
let script, output = "";
const n = scripts.length;
let i = 0;

for (; i < n; i+=1) {
	script = fs.readFileSync(scripts[i], "utf8");
	output += (script.trim()) + EOL + EOL;
}

// Write the output to a file
fs.appendFile(appJS, output);
