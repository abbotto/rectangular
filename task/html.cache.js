const finder = require("glob-concat");
const fs = require("fs");
const sh = require("shelljs");
const files = finder.sync([
	"./src/client/component/**/*.html"
]);
const tmpJS = "tmp/templates.js";
let templates = [], key, value, cache;

files.forEach((path) => {
	key = path
	.replace("./src/client/", "")
	.replace("component/", "")
	.replace("shared/", "")
	value = JSON.stringify(fs.readFileSync(path, "utf8"));
	templates.push("$templateCache.put(\"" + key + "\"," + value + ")");
});

cache = templates.join(";");
templates = "(function(){angular.module(\"app.template\", []).run(function($templateCache) {" + cache + "})})()";
fs.writeFile(tmpJS, templates);
