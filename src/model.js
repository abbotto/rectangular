"use strict";

const fs = require("fs");
const glob = require("glob-concat");
const parseAssets = require(__dirname + "/src/utility/parseAssets.js");

module.exports = function model(deps, root) {
	const json = parseAssets(deps);
	const tmpModelJs = root + "/tmp/model.auto.js";

	json.forEach((filePath, i) => {
		json[i] = filePath.replace("./", root + "/");
	});

	const modelFiles = glob.sync(json);
	
	let key;
	let models = {};
	
	modelFiles.forEach((filePath) => {
		key = filePath.replace("./", "");
		
		models[key] = fs.readFileSync(
			filePath.replace("./", root + "/"),
			"utf8"
		);
	});

	models = "export default angular.module(\"model.auto\", []).constant(\"modelAuto\", " + JSON.stringify(models) + ");";
	fs.writeFile(tmpModelJs, models);
};
