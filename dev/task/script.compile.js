"use strict";

const sh = require("shelljs");
const finder = require("glob-concat");
const fs = require("fs");
const appJSPath = "dist/app.js";
const mapJSPath = "dist/app.js.map";
const tmpJSPath = "tmp/source.js";
const EOL = require("os").EOL;
const projectPath = require("./project.path.js");

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

const sourceJSON = projectPath(finder.sync(require(__dirname.split("/node_modules/rectangular")[0] + "/dev/asset/source.js.json")));
console.log(__dirname.split("/node_modules/rectangular")[0], sourceJSON);

const vendorJSON = projectPath(require(__dirname.split("/node_modules/rectangular")[0] + "/dev/asset/vendor.js.json"));

// Write source code to temporary file
sh.cat(sourceJSON).to(tmpJSPath);

// Add tmpJSPath to the compile list
vendorJSON.push(tmpJSPath);
const files = vendorJSON;

// Convert ES6 to ES5
console.log("\nConverting ES6 to ES5...");
sh.exec("sleep 2");
sh.exec("node_modules/babel-cli/bin/babel.js " + tmpJSPath + " --out-file " + tmpJSPath);

// Generate a source map in dev mode
console.log("Generating sourcemap...");
sh.exec("sleep 2");
const sourceMap = (process.env.NODE_ENV === "development") ? "--source-map " + mapJSPath + " " : "";

// Minify the output
console.log("Minifying the output...");
sh.exec("sleep 2");
sh.exec("node_modules/uglify-js/bin/uglifyjs " + tmpJSPath + " " + sourceMap + "-o " + tmpJSPath);

// Push the file contents into an array
const script = [];
const n = files.length;
let i = 0;

// Prevent minified files from cramming together
for (; i < n; i+=1) {
	script.push(fs.readFileSync(files[i], "utf8"));
}

// Prevent minified files from cramming together
// and breaking as a result
const output = script.join("\n\n");

// Write the output to a file
console.log("Building...");
sh.exec("sleep 2");
fs.writeFileSync(appJSPath, output, "utf8");
