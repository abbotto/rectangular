"use strict";

const finder = require("glob-concat");
const fs = require("fs");
const getPath = require("./get.path.js");
const injectServices = finder.sync([getPath() + "/dev/asset/service.ng.json"]);
const tmpJS = "tmp/app.service.js";

if (injectServices.length) {
	const services = [];
	
	injectServices.forEach((service) => {
		services.push(service);
	});
}

const appService = "(function(){angular.module(\"app.service\", " + JSON.stringify(services.sort()) + ")})();";
fs.writeFile(tmpJS, appService);
