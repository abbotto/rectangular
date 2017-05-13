"use strict";

const finder = require("glob-concat");
const fs = require("fs");
const sh = require("shelljs");
const pug = require("pug");
const getPath = require("./get.path.js");

const files = finder.sync([
	getPath() + "/app/component/**/*.html",
	getPath() + "/app/component/**/*.jsx"
]);

const tmpJS = "tmp/templates.js";

let key, value;
let templates = [];

// Push the file contents into an array
const compileScripts = (files) => {
	const script = [];
	const n = files.length;
	let i = 0;

	// Prevent minified files from cramming together
	for (; i < n; i += 1) {
		script.push(fs.readFileSync(files[i], "utf8"));
	}

	// Prevent minified files from cramming together
	// and breaking as a result
	return script.join(EOL + EOL);
};

files.forEach((path) => {
	key = path
		.replace(getPath() + "/", "")
		.replace("./", "")
		.replace("app/", "")
		.replace("component/", "")
		.replace("extension/", "")
	;

	key.indexOf(".jsx") > -1
		? value = JSON.stringify(fs.readFileSync(path, "utf8"))
		: value = JSON.stringify(pug.compileFile(path)())
	;

	templates.push("$templateCache.put(\"" + key + "\"," + value + ")");
});

const cache = templates.join(";");
templates = "(function(){angular.module(\"app.template\", []).run(function($templateCache) {" + cache + "})})()";
fs.writeFile(tmpJS, templates);
