"use strict";

const camelCase = require("camelcase");
const EOL = require("os").EOL;
const fs = require("fs");
const glob = require("glob-concat");
const routeFiles = glob.sync(["app/component/**/*.route.js"]);
const path = require("path");
const tmpRouteJs = "tmp/component.route.js";

module.exports = function image() {
	const routes = [];
	const imports = [];
	const deps = [];

	routeFiles.forEach((file) => {
		const route = path.basename(file).replace(".js", "");
		imports.push("import " + camelCase(route) + " from \"" + file.split("node_modules/")[1] + "\";");
		deps.push(camelCase(route) + ".name");
		routes.push(route);
	});

	const componentRoutes = imports.join("") + "export default angular.module(\"component.route\", [" + deps.join(",") + "]);" + EOL;
	fs.writeFile(tmpRouteJs, componentRoutes);
};
