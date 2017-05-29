"use strict";

const sh = require("shelljs");
const finder = require("glob-concat");
const fs = require("fs");
const getPath = require("./get.path.js");
const transpile = require("./script.transpile.js");

// Load environment variables
require("dotenv").config();

sh.exec("node build/reset.js");
sh.exec("mkdir tmp/app");
sh.exec("mkdir tmp/dev");
sh.exec("touch tmp/spec.js");
sh.exec("cp -a " + getPath() + "/app/. tmp/app/");
sh.exec("cp -a " + getPath() + "/dev/. tmp/dev/");

sh.exec("node build/vendor.compile.js");
sh.exec("node build/service.compile.js");
sh.exec("node build/constant.cache.js");
sh.exec("node build/route.compile.js");
sh.exec("node build/model.cache.js");
sh.exec("node build/html.cache.js");

const es6Files = finder.sync([
	getPath() + "/node_modules/rectangular/tmp/**/test..js",
	getPath() + "/node_modules/rectangular/tmp/**/*.spec.js",
	getPath() + "/node_modules/rectangular/tmp/**/*.js"
]);

transpile(es6Files);

// Push the file contents into an array
const script = [];
const n = es6Files.length;
let i = 0;

// Prevent minified files from cramming together
for (; i < n; i += 1) {
	script.push(fs.readFileSync(es6Files[i], "utf8"));
}

// Write the output to a file
fs.writeFileSync(
	"tmp/spec.js",
	script.join("\n\n").trim(),
	"utf8"
);

// Run through webpack
sh.exec("node_modules/.bin/webpack --config build/webpack/spec.config.js");
