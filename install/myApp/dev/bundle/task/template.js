"use strict";

const fs = require("fs");
const glob = require("glob-concat");
const pug = require("pug");
const tmpTplJs = "tmp/templates.js";

module.exports = function template(patterns) {
	const tplFiles = glob.sync(patterns || [
		"app/component/**/*.html",
		"app/extension/**/*.html",
		"app/component/**/*.jsx",
		"app/extension/**/*.jsx"
	]);
	
	let key, value;
	let templates = [];
	
	tplFiles.forEach((path) => {
		key = path
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
	fs.writeFile(tmpTplJs, templates);
};
