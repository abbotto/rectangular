"use strict";

const fs = require("fs");
const glob = require("glob-concat");
const dataFiles = glob.sync(["app/**/*.data.json"]);
const mixinFiles = glob.sync(["app/**/*.mixin.json"]);
const modelFiles = mixinFiles.concat(dataFiles);
const tmpModelJs = "tmp/models.js";

module.exports = function image() {
	let key;
	let models = {};
	
	modelFiles.forEach((path) => {
		key = path
			.replace("./", "")
		;
		models[key] = fs.readFileSync(path, "utf8");
	});

	models = "export default angular.module(\"app.model\", []).constant(\"appModel\", " + JSON.stringify(models) + ");";
	fs.writeFile(tmpModelJs, models);
};
