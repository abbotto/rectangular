"use strict";

const finder = require("glob-concat");
const fs = require("fs");
const path = require("path");
const camelCase = require("camelcase");
const EOL = require("os").EOL;
const getPath = require("./get.path.js");

const files = finder.sync([getPath() + "/node_modules/rectangular/tmp/app/component/**/*.route.js"]);
const tmpJS = getPath() + "/node_modules/rectangular/tmp/component.route.js";
const routes = [];
const imports = [];
const deps = [];

files.forEach((file) => {
	const route = path.basename(file).replace(".js", "");
	imports.push("import " + camelCase(route) + " from \"app/" + file.split("app/")[1] + "\";");
	deps.push(camelCase(route) + ".name");
	routes.push(route);
});

const componentRoutes = imports.join("") + "export default angular.module(\"component.route\", [" + deps.join(",") + "]);" + EOL;
fs.writeFile(tmpJS, componentRoutes);
