"use strict";

const fs = require("fs");
const glob = require("glob-concat");
const parseAssets = require("dev/utility/parseAssets.js");
const path = require("path");
const pug = require("pug");
const tmpTplJs = "tmp/template.auto.js";

module.exports = function template(deps) {
	const markup = deps.markup || require("deps.json").markup;
	const tplFiles = glob.sync(
		parseAssets(
			markup
		)
	);
	
	let key, value;
	let templates = [];
	
	tplFiles.forEach((filePath) => {
		key = filePath
			.replace("./", "")
		;
		
		path.extname(key) === "jsx"
			? value = JSON.stringify(fs.readFileSync(filePath, "utf8"))
			: value = JSON.stringify(pug.compileFile(filePath)())
		;
		
		templates.push("$templateCache.put(\"" + key + "\"," + value + ")");
	});
	
	const cache = templates.join(";");
	templates = "export default angular.module(\"template.auto\", []).run(function($templateCache) {" + cache + "});";
	fs.writeFile(tmpTplJs, templates);
};
