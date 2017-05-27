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

// Pre-requisite builds
sh.exec(getPath() + "/node_modules/rectangular/node_modules/eslint/bin/eslint.js --quiet --fix --ext .json --ext .js .");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/service.compile.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/constant.cache.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/route.compile.js");
// sh.exec("node " + getPath() + "/node_modules/rectangular/build/spec.compile.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/model.cache.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/html.cache.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/vendor.compile.js");

// Convert ES6 to ES5 w/ webpack + babel
sh.exec("node_modules/.bin/webpack --config app.webpack.js");

// Write the output to a file
if (process.env.NODE_ENV === "production") {
	sh.exec("cp tmp/app.js.gz dist/app.js.gz");
}
else if (process.env.NODE_ENV === "development") {
	sh.exec("cp tmp/app.js dist/app.js");
}
