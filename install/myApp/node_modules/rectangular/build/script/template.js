"use strict";

const finder = require("glob-concat");
const fs = require("fs");
const sh = require("shelljs");
const pug = require("pug");
const getPath = require("../utility/get.path.js");

const files = finder.sync([
	getPath() + "/app/component/**/*.html",
	getPath() + "/app/extension/**/*.html",
	getPath() + "/app/component/**/*.jsx",
	getPath() + "/app/extension/**/*.jsx"
]);

const tmpJS = "tmp/templates.js";

let key, value;
let templates = [];

files.forEach((path) => {
	key = path
		.replace(getPath() + "/", "")
		.replace("./", "")
	;

	key.indexOf(".jsx") > -1
		? value = JSON.stringify(fs.readFileSync(path, "utf8"))
		: value = JSON.stringify(pug.compileFile(path)())
	;

	templates.push("$templateCache.put(\"" + key + "\"," + value + ")");
});

const cache = templates.join(";");
templates = "export default angular.module(\"app.template\", []).run(function($templateCache) {" + cache + "});";
fs.writeFile(tmpJS, templates);
