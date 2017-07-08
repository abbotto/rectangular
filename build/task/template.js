"use strict";

const fs = require("fs");
const glob = require("glob-concat");
const pug = require("pug");
const tmpTplJs = "tmp/templates.js";

const tplFiles = glob.sync([
	"app/component/**/*.html",
	"app/extension/**/*.html",
	"app/component/**/*.jsx",
	"app/extension/**/*.jsx"
]);

module.exports = function template() {
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
