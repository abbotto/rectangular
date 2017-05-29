"use strict";

const fs = require("fs");
const injectServices = require(__dirname + "/../tmp/dev/asset/service.ng.json");
const tmpJS = "tmp/app.service.js";
const appService = "export default angular.module(\"app.service\", " + JSON.stringify(injectServices.sort()) + ");";

fs.writeFile(tmpJS, appService);
