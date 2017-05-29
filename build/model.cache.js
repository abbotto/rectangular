"use strict";

const finder = require("glob-concat");
const fs = require("fs");
const sh = require("shelljs");
const getPath = require("./get.path.js");
const mixin = finder.sync([getPath() + "/app/**/*.mixin.json"]);
const data = finder.sync([getPath() + "/app/**/*.data.json"]);
const tmpJS = "tmp/models.js";
const files = mixin.concat(data);

let key;
let models = {};

files.forEach((path) => {
	key = path
		.replace(getPath() + "/", "")
		.replace("./", "")
	;
	models[key] = fs.readFileSync(path, "utf8");
});

models = "export default angular.module(\"app.model\", []).constant(\"appModel\", " + JSON.stringify(models) + ");";
fs.writeFile(tmpJS, models);
