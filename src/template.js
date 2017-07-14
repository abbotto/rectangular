"use strict";

const fs = require("fs");
const glob = require("glob-concat");
const parseAssets = require(__dirname + "/src/utility/parseAssets.js");
const path = require("path");
const pug = require("pug");

module.exports = function template(deps, root) {
	const markup = parseAssets(deps);
	const tmpTplJs = root + "/tmp/template.auto.js";
	
	markup.forEach((filePath, i) => {
		markup[i] = filePath.replace("./", root + "/");
	});

	const tplFiles = glob.sync(markup);
	
	let key, value;
	let templates = [];
	
	tplFiles.forEach((filePath) => {
		key = filePath.replace(root + "/", "");
		
		path.extname(key) === ".jsx"
			? value = JSON.stringify(fs.readFileSync(filePath, "utf8"))
			: value = JSON.stringify(pug.compileFile(filePath)())
		;
		
		templates.push("$templateCache.put(\"" + key + "\"," + value + ")");
	});
	
	const cache = templates.join(";");
	templates = "export default angular.module(\"template.auto\", []).run(function($templateCache) {" + cache + "});";
	fs.writeFile(tmpTplJs, templates);
};
