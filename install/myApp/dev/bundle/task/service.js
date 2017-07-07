"use strict";

const fs = require("fs");
const serviceNames = require("dev/asset/service.json");
const tmpServiceJs = "tmp/app.service.js";

module.exports = function service() {
	const appService = "export default angular.module(\"app.service\", " + JSON.stringify(serviceNames.sort()) + ");";
	fs.writeFile(tmpServiceJs, appService);
};
