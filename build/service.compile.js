"use strict";

const fs = require("fs");
const getPath = require("./get.path.js");
const injectServices = require(__dirname + "/../tmp/dev/asset/service.ng.json");
const tmpJS = "tmp/app.service.js";
const appService = "export default angular.module(\"app.service\", " + JSON.stringify(injectServices.sort()) + ").name;";

fs.writeFile(tmpJS, appService);
