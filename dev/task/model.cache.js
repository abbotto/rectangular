"use strict";

const finder = require("glob-concat");
const fs = require("fs");
const sh = require("shelljs");

const mixin = finder.sync([
	"app/client/**/*.mixin.json",
	"tmp/src/app/client/**/*.mixin.json"
]);

const data = finder.sync([
	"./app/client/**/*.data.json",
	"./tmp/src/app/client/**/*.data.json"
]);

const tmpJS = "tmp/models.js";

const files = mixin.concat(data);
let models = {}, key;

files.forEach((path) => {
	key = path
		.replace("./", "")
		.replace("tmp/src/", "")
		.replace("app/client/", "")
		.replace("component/", "")
		.replace("model/", "")
		.replace("shared/", "")
	;
	models[key] = fs.readFileSync(path, "utf8");
});

models = "(function(){angular.module(\"app.model\", []).constant(\"appModel\", " + JSON.stringify(models) + ")})();";
fs.writeFile(tmpJS, models);
