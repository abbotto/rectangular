"use strict";

const finder = require("glob-concat");
const fs = require("fs");
const sh = require("shelljs");

const serviceFiles = finder.sync([
	"app/**/*.service.js",
	"tmp/src/app/**/*.service.js"
]);

const serviceAssets = require("./../../dev/task/asset/service.ng.json");
const tmpJSAssets = !!fs.exists("./../../tmp/vendor.js.json") ? require("./../../tmp/vendor.js.json") : [];
const tmpSCSSAssets = !!fs.exists("./../../tmp/vendor.scss.json") ? require("./../../tmp/vendor.scss.json") : [];
const tmpJS = "tmp/app.service.js";

const services = [];

serviceFiles.forEach((path) => {
	if (path.indexOf("ui.bootstrap.service.js") > -1) {
		services.push("ui.bootstrap.service");
	}
	else if (path.indexOf("ui.material.service.js") > -1) {
		services.push("ui.material.service");
	}
});

const deps = !!serviceAssets.length ? (services.concat(serviceAssets)).sort() : services.sort();
const appService = "(function(){angular.module(\"app.service\", " + JSON.stringify(deps) + ")})();";

fs.writeFile(tmpJS, appService);
