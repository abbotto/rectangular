"use strict";

const finder = require("glob-concat");
const fs = require("fs");
const sh = require("shelljs");
const pug = require("pug");
const files = finder.sync(["./../../dev/app/component/**/*.html"]);
const tmpJS = "tmp/templates.js";

let templates = [], key, value;

files.forEach((path) => {
	key = path
		.replace("./", "")
		.replace("app/", "")
		.replace("component/", "")
		.replace("shared/", "")
	;
	value = JSON.stringify(pug.compileFile(path)());
	templates.push("$templateCache.put(\"" + key + "\"," + value + ")");
});

const cache = templates.join(";");
templates = "(function(){angular.module(\"app.template\", []).run(function($templateCache) {" + cache + "})})()";
fs.writeFile(tmpJS, templates);
