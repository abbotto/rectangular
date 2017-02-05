"use strict";

const sh = require("shelljs");
sh.exec("cp -a ./task/enable-demo/excuse/. ./src/client/component/excuse ");
sh.exec("cp ./task/enable-demo/app.route.js ./src/client/registry/app.route.js");
sh.exec("cp ./task/enable-demo/home.component.html ./src/client/component/home/home.component.html");