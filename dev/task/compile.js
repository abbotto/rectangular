"use strict";

const sh = require("shelljs");

sh.exec("node dev/task/reset.js");
sh.exec("node dev/task/app.intro.js");
sh.exec("node dev/task/script.compile.js");
sh.exec("node dev/task/html.compile.js");
sh.exec("node dev/task/style.compile.js");
sh.exec("rm -rf ./../../dist && mv dist ./../../");