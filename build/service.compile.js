"use strict";

const fs = require("fs");
const getPath = require("./get.path.js");
const injectServices = require(getPath() + "/dev/asset/service.ng.json");
const tmpJS = "tmp/app.service.js";
const appService = "(function(){angular.module(\"app.service\", " + JSON.stringify(injectServices.sort()) + ")})();";

fs.writeFile(tmpJS, appService);
