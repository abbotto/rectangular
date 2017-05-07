/* eslint-disable impliedStrict */

const finder = require("glob-concat");
const fs = require("fs");
const sh = require("shelljs");
const getPath = require("./get.path.js");

const serviceFiles = finder.sync([getPath() + "/app/**/*.service.js"]);
const tmpJS = "tmp/app.service.js";

const services = [];
let name, parts;

serviceFiles.forEach((path) => {
	parts = path.split("/");
	name = parts.pop().split(".js")[0];
	
	if (name === "ui.bootstrap.service" || name === "ui.material.service") {
		services.push(name);
	}
});

const appService = "(function(){angular.module(\"app.service\", " + JSON.stringify(services.sort()) + ")})();";

fs.writeFile(tmpJS, appService);
