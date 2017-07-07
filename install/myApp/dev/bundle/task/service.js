"use strict";

const fs = require("fs");
const tmpServiceJs = "tmp/services.js";

module.exports = function service(names) {
	const serviceNames = names || require("dev/asset/service.json");
	const appService = "export default angular.module(\"app.service\", " + JSON.stringify(serviceNames.sort()) + ");";
	fs.writeFile(tmpServiceJs, appService);
};
