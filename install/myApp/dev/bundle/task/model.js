"use strict";

const fs = require("fs");
const glob = require("glob-concat");
const tmpModelJs = "tmp/model.auto.js";

module.exports = function image() {
	const modelFiles = glob.sync([
		"app/**/*.data.json",
		"app/**/*.mixin.json"
	]);
	
	let key;
	let models = {};
	
	modelFiles.forEach((path) => {
		key = path
			.replace("./", "")
		;
		models[key] = fs.readFileSync(path, "utf8");
	});

	models = "export default angular.module(\"model.auto\", []).constant(\"modelAuto\", " + JSON.stringify(models) + ");";
	fs.writeFile(tmpModelJs, models);
};
