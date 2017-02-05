const finder = require("glob-concat");
const fs = require("fs");
const path = require("path");

// Cross-platform newline
const EOL = require("os").EOL;

const files = finder.sync([
	"./src/client/component/**/*.route.js"
]);

const tmpJS = "tmp/component.route.js";
const newFiles = [];
files.forEach((file) => {
	newFiles.push(path.basename(file).replace(".js", ""));
});

const componentRoutes = "(function(){angular.module(\"component.route\", " + JSON.stringify(newFiles) + ");})();" + EOL;
fs.writeFile(tmpJS, componentRoutes);
