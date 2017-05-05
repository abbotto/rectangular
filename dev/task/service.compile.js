"use strict";

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
	name = parts.pop().join(".");
	services.push(name.split(".js"[0]));
});

const appService = "(function(){angular.module(\"app.service\", " + JSON.stringify(services.sort()) + ")})();";

fs.writeFile(tmpJS, appService);
