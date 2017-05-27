"use strict";

const sh = require("shelljs");
const finder = require("glob-concat");
const fs = require("fs");
// const appJSPath = "dist/app.js";
const mapJSPath = "dist/app.js.map";
const tmpJSPath = "tmp/app.js";
const EOL = require("os").EOL;
const setPath = require("./set.path.js");
const getPath = require("./get.path.js");

// Load environment variables
require("dotenv").config();

sh.exec("mkdir tmp/app");
sh.exec("mkdir tmp/dev");
sh.exec("touch tmp/app.js");
sh.exec("cp -a " + getPath() + "/app/. tmp/app/");
sh.exec("cp -a " + getPath() + "/dev/. tmp/dev/");

// Pre-flight builds
sh.exec(getPath() + "/node_modules/rectangular/node_modules/eslint/bin/eslint.js --quiet --fix --ext .json --ext .js .");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/service.compile.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/constant.cache.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/route.compile.js");
// sh.exec("node " + getPath() + "/node_modules/rectangular/build/spec.compile.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/model.cache.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/html.cache.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/vendor.compile.js");

const sourceJSON = finder.sync(setPath(require(__dirname.split("/build")[0] + "/tmp/dev/asset/source.js.json")));
const vendorJSON = setPath(require(__dirname.split("/build")[0] + "/tmp/dev/asset/vendor.js.json"));

// Write source code to temporary file
// sh.cat(sourceJSON).to(tmpJSPath);

// Add tmpJSPath to the compile list
const vendorFiles = vendorJSON;
// const sourceFiles = [tmpJSPath];

// Convert ES6 to ES5
// sh.exec("node_modules/babel-cli/bin/babel.js " + tmpJSPath + " --out-file " + tmpJSPath);
sh.exec("node_modules/.bin/webpack --config app.webpack.js");

// Generate a source map in dev mode
// const sourceMap = (process.env.NODE_ENV === "development") ? "--source-map " + mapJSPath + " " : "";

// Minify the output
// sh.exec("node_modules/uglify-js/bin/uglifyjs " + tmpJSPath + " " + sourceMap + "-o " + tmpJSPath);

// Write the output to a file
// fs.writeFileSync(appJSPath, compileScripts(sourceFiles), "utf8");
sh.exec("cp tmp/app.js dist/app.js");
