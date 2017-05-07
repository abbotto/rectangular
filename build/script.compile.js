/* eslint-disable impliedStrict */

const sh = require("shelljs");
const finder = require("glob-concat");
const fs = require("fs");
const appJSPath = "dist/app.js";
const mapJSPath = "dist/app.js.map";
const tmpJSPath = "tmp/source.js";
const EOL = require("os").EOL;
const setPath = require("./set.path.js");
const getPath = require("./get.path.js");

// Load environment variables
require("dotenv").config();

// Pre-flight builds
sh.exec(getPath() + "/node_modules/rectangular/node_modules/eslint/bin/eslint.js --fix --quiet .");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/service.compile.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/constant.cache.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/route.compile.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/spec.compile.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/model.cache.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/html.cache.js");

const sourceJSON = finder.sync(setPath(require(getPath() + "/dev/asset/source.js.json")));
const vendorJSON = setPath(require(getPath() + "/dev/asset/vendor.js.json"));

// Write source code to temporary file
sh.cat(sourceJSON).to(tmpJSPath);

// Add tmpJSPath to the compile list
vendorJSON.push(tmpJSPath);
const files = vendorJSON;

// Convert ES6 to ES5
sh.exec("node_modules/babel-cli/bin/babel.js " + tmpJSPath + " --out-file " + tmpJSPath);

// Generate a source map in dev mode
const sourceMap = (process.env.NODE_ENV === "development") ? "--source-map " + mapJSPath + " " : "";

// Minify the output
sh.exec("node_modules/uglify-js/bin/uglifyjs " + tmpJSPath + " " + sourceMap + "-o " + tmpJSPath);

// Push the file contents into an array
const script = [];
const n = files.length;
let i = 0;

// Prevent minified files from cramming together
for (; i < n; i += 1) {
	script.push(fs.readFileSync(files[i], "utf8"));
}

// Prevent minified files from cramming together
// and breaking as a result
const output = script.join(EOL + EOL);

// Write the output to a file
fs.writeFileSync(appJSPath, output, "utf8");
