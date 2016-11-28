const finder = require("glob-concat");
const fs = require("fs");
const sh = require("shelljs");

const mixin = finder.sync(["./src/client/**/*.mixin.json"]);
const data = finder.sync(["./src/client/**/*.data.json"]);
const tmpJS = "tmp/models.js";

const files = mixin.concat(data);
let models = {}, key;

files.forEach((path) => {
	key = path
	.replace("./", "")
	.replace("src/client/", "")
	.replace("component/", "")
	.replace("model/", "")
	.replace("core/", "");
	models[key] = fs.readFileSync(path, "utf8");
});

models = "(function(){angular.module(\"app.model\", []).constant(\"appModel\", " + JSON.stringify(models) + ")})();";
fs.writeFile(tmpJS, models);
