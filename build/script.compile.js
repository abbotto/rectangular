"use strict";

const sh = require("shelljs");
const finder = require("glob-concat");
const getPath = require("./get.path.js");
const transpile = require("./script.transpile.js");

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
sh.exec("node " + getPath() + "/node_modules/rectangular/build/model.cache.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/html.cache.js");
sh.exec("node " + getPath() + "/node_modules/rectangular/build/vendor.compile.js");

// Convert ES6 to ES5 w/ webpack + babel
const es6Files = finder.sync([
	"!" + getPath() + "/node_modules/rectangular/tmp/**/test.*.js",
	"!" + getPath() + "/node_modules/rectangular/tmp/**/*.spec.js",
	getPath() + "/node_modules/rectangular/tmp/**/*.js"
]);

transpile(es6Files);
sh.exec("node_modules/.bin/webpack --config build/webpack/app.config.js");

// Write the output to a file
if (process.env.NODE_ENV === "production") {
	sh.exec("cp tmp/app.js.gz dist/app.js.gz");
}
else if (process.env.NODE_ENV === "development") {
	sh.exec("cp tmp/app.js dist/app.js");
}
