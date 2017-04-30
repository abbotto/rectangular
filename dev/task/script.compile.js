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
const appJS = "./dist/app.js";
const mapJS = "./dist/app.js.map";
const tmpJS = "./tmp/source.js";

// Cross-platform newline
const EOL = require("os").EOL;

// Locate scripts to compile
const sourceJSON = finder.sync(require("./asset/source.js.json").concat(require("./../../tmp/src/dev/task/asset/source.js.json")));
let vendorJSON = finder.sync(require("./asset/vendor.js.json").concat(require("./../../tmp/src/dev/task/asset/vendor.js.json")));
const tmpVendorJSON = finder.sync(require("../../tmp/vendor.js.json")) || [];
if (!!tmpVendorJSON.length) vendorJSON = vendorJSON.concat(tmpVendorJSON);

// Write source code to temporary file
sh.cat(sourceJSON).to(tmpJS);

// Add tmpJS to the compile list
vendorJSON.push(tmpJS);

// Convert ES6 to ES5
sh.exec("node_modules/babel-cli/bin/babel.js " + tmpJS + " --out-file " + tmpJS);

// Generate a source map in dev mode
const sourceMap = (process.env.NODE_ENV === "development") ? "--source-map " + mapJS + " " : "";

// Minify the output
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
fs.writeFileSync(appJS, output, "utf8");
