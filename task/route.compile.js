"use strict";

const finder = require("glob-concat");
const fs = require("fs");
const path = require("path");
const getPath = require("./get.path.js");
const EOL = require("os").EOL;
const files = finder.sync([getPath() + "/app/component/**/*.route.js"]);
const tmpJS = "tmp/component.route.js";
const newFiles = [];

files.forEach((file) => {
	newFiles.push(path.basename(file).replace(".js", ""));
});

const componentRoutes = "(function(){angular.module(\"component.route\", " + JSON.stringify(newFiles) + ");})();" + EOL;
fs.writeFile(tmpJS, componentRoutes);