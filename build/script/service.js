"use strict";

const fs = require("fs");
const getPath = require("../utility/get.path.js");

const injectServices = require(getPath() + "/dev/asset/service.ng.json");
const tmpJS = "tmp/services.js";
const appService = "export default angular.module(\"app.service\", " + JSON.stringify(injectServices.sort()) + ");";

fs.writeFile(tmpJS, appService);
