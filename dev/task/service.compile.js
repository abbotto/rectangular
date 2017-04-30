"use strict";

const finder = require("glob-concat");
const fs = require("fs");
const sh = require("shelljs");

const serviceFiles = finder.sync([
	"./app/client/**/*.service.js",
	"./tmp/src/app/client/**/*.service.js"
]);

const serviceAssets = require("./asset/service.ng.json").concat(require("./../../tmp/src/dev/task/asset/service.ng.json"));
const tmpJSAssets = !!fs.exists("./tmp/vendor.js.json") ? require("./tmp/vendor.js.json") : [];
const tmpSCSSAssets = !!fs.exists("./tmp/vendor.scss.json") ? require("./tmp/vendor.scss.json") : [];
const tmpJS = "tmp/app.service.js";

const services = [];

serviceFiles.forEach((path) => {
	if (path.indexOf("ui.bootstrap.service.js") > -1) {
		services.push("ui.bootstrap.service");
		// Deps
		tmpJSAssets.push("\"./node_modules/angular-strap/dist/angular-strap.min.js\"");
		tmpJSAssets.push("\"./node_modules/angular-strap/dist/angular-strap.tpl.min.js\"");
		tmpSCSSAssets.push("\"./node_modules/bootstrap/dist/css/bootstrap.min.css\"");
		tmpSCSSAssets.push("\"./node_modules/bootstrap/dist/css/bootstrap-theme.min.css\"");
		sh.exec("npm i bootstrap angular-strap");
	}
	
	else if (path.indexOf("locale.service.js") > -1) {
		services.push("locale.service");
	}
	
	else if (path.indexOf("ui.material.service.js") > -1) {
		services.push("ui.material.service");
		// Deps
		tmpJSAssets.push("\"./node_modules/angular-material/angular-material.min.js\"");
		tmpSCSSAssets.push("\"./node_modules/angular-material/angular-material.min.css\"");
		sh.exec("npm i angular-material");
	}
	
	else if (path.indexOf("promise.service.js") > -1) {
		services.push("promise.service");
	};
});

const deps = !!serviceAssets.length ? (services.concat(serviceAssets)).sort() : services.sort();
const appService = "(function(){angular.module(\"app.service\", " + JSON.stringify(deps) + ")})();";

// Write the files
sh.exec("echo " + JSON.stringify(tmpJSAssets) + " > ./tmp/vendor.js.json");
sh.exec("echo " + JSON.stringify(tmpSCSSAssets) + " > ./tmp/vendor.scss.json");
fs.writeFile(tmpJS, appService);
