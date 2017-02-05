"use strict";

const sh = require("shelljs");
sh.exec("rm -rf ./src/client/component/excuse");
sh.exec("cp ./task/disable-demo/app.route.js ./src/client/registry/app.route.js");
sh.exec("cp ./task/disable-demo/home.component.html ./src/client/component/home/home.component.html");