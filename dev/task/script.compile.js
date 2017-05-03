"use strict";

const sh = require("shelljs");
const finder = require("glob-concat");
const fs = require("fs");

// Load environment variables
require("dotenv").config();

// Pre-flight tasks
sh.exec("node_modules/eslint/bin/eslint.js --fix app/");
sh.exec("node dev/task/service.compile.js");
sh.exec("node dev/task/constant.cache.js");
sh.exec("node dev/task/route.compile.js");
sh.exec("node dev/task/spec.compile.js");
sh.exec("node dev/task/model.cache.js");
sh.exec("node dev/task/html.cache.js");

// Output paths
const appJS = "dist/app.js";
const mapJS = "dist/app.js.map";
const tmpJS = "tmp/source.js";

const EOL = require("os").EOL;

const sourceJSON = finder
	.sync(
		require("./../../dev/task/asset/source.js.json")
		.concat(require("./../../tmp/src/dev/task/asset/source.js.json"))
	)
;

let vendorJSON = finder.sync(require("./../../dev/task/asset/vendor.js.json"));
const tmpVendorJSON = !!fs.exists("./../../tmp/vendor.js.json") ? require("./../../tmp/vendor.js.json") : [];
if (!!tmpVendorJSON.length) vendorJSON = vendorJSON.concat(tmpVendorJSON);

// Write source code to temporary file
sh.cat(sourceJSON).to(tmpJS);

// Add tmpJS to the compile list
vendorJSON.push(tmpJS);

// Convert ES6 to ES5
console.log("\nConverting ES6 to ES5...");
sh.exec("sleep 2");
sh.exec("node_modules/babel-cli/bin/babel.js " + tmpJS + " --out-file " + tmpJS);

// Generate a source map in dev mode
console.log("Generating sourcemap...");
sh.exec("sleep 2");
const sourceMap = (process.env.NODE_ENV === "development") ? "--source-map " + mapJS + " " : "";

// Minify the output
console.log("Minifying the output...");
sh.exec("sleep 2");
sh.exec("node_modules/uglify-js/bin/uglifyjs " + tmpJS + " " + sourceMap + "-o " + tmpJS);

// Push the file contents into an array
const script = [];
const n = vendorJSON.length;
let i = 0;

// Prevent minified files from cramming together
for (; i < n; i+=1) {
	script.push(fs.readFileSync(vendorJSON[i], "utf8"));
}

// Prevent minified files from cramming together
// and breaking as a result
const output = script.join("\n\n");

// Write the output to a file
console.log("Building...");
sh.exec("sleep 2");
fs.writeFileSync(appJS, output, "utf8");
