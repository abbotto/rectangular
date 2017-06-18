"use strict";

const fs = require("fs");
const sh = require("shelljs");
const finder = require("glob-concat");
const getPath = require("./utility/get.path.js");
const transpile = require("./script/transpile.js");

// Load environment variables
require("dotenv").config();

// Copy/create directories
sh.exec("cp -a " + getPath() + "/app/. tmp/app/");
sh.exec("cp -a " + getPath() + "/dev/. tmp/dev/");

if (!fs.existsSync(getPath() + "/dist")) {
	sh.exec("mkdir " + getPath() + "/dist");
}

// Pre-requisite builds
sh.exec("node build/script/service.js");
sh.exec("node build/script/constant.js");
sh.exec("node build/script/route.js");
sh.exec("node build/script/model.js");
sh.exec("node build/script/template.js");

// List of JS files
const es6Files = finder.sync([
	"!" + getPath() + "/node_modules/rectangular/tmp/**/test.*.js",
	"!" + getPath() + "/node_modules/rectangular/tmp/**/*.spec.js",
	"!" + getPath() + "/node_modules/rectangular/tmp/**/spec.js",
	getPath() + "/node_modules/rectangular/tmp/**/*.js"
]);

// Convert ES6 to ES5 w/ babel
transpile(es6Files);

// Import modules w/ webpack
sh.exec("node_modules/.bin/webpack --config build/webpack/app.config.js");
