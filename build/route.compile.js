"use strict";

const finder = require("glob-concat");
const fs = require("fs");
const path = require("path");
const getPath = require("./get.path.js");
const camelCase = require("camelcase");
const EOL = require("os").EOL;

const files = finder.sync([__dirname.split("/build")[0] + "/tmp/app/component/**/*.route.js"]);
const tmpJS = __dirname.split("/build")[0] + "/tmp/component.route.js";
const routes = [];
const imports = [];
const deps = [];

files.forEach((file) => {
	const route = path.basename(file).replace(".js", "");
	imports.push("import " + camelCase(route) + " from \"app/" + file.split("app/")[1] + "\";");
	deps.push(camelCase(route));
	routes.push(route);
});

const componentRoutes = imports.join("") + "export default angular.module(\"component.route\", [" + deps.join(",") + "]).name;" + EOL;
fs.writeFile(tmpJS, componentRoutes);
