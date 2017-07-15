"use strict";

const camelCase = require("camelcase");
const EOL = require("os").EOL;
const fs = require("fs");
const glob = require("glob-concat");
const parseAssets = require(__dirname + "/utility/parseAssets.js");
const path = require("path");

module.exports = function route(paths, root) {
	paths = parseAssets(paths);
	const deps = [];
	const imports = [];
	const routes = [];
	const tmpRouteJs = root + "/tmp/route.auto.js";
	
	paths.forEach((filePath, i) => {
		paths[i] = filePath.replace("./", root + "/");
	});
	
	const routeFiles = glob.sync(paths);
	
	routeFiles.forEach((file) => {
		const route = path.basename(file).replace(".js", "");
		imports.push("import " + camelCase(route) + " from \"" + file.replace(root + "/", "~/") + "\";");
		deps.push(camelCase(route) + ".name");
		routes.push(route);
	});

	const componentRoutes = imports.join("") + "export default angular.module(\"route.auto\", [" + deps.join(",") + "]);" + EOL;
	fs.writeFile(tmpRouteJs, componentRoutes);
};
