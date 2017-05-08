"use strict";

const sh = require("shelljs");

sh.exec("node build/reset.js");
sh.exec("node build/app.intro.js");
sh.exec("node build/script.compile.js");
sh.exec("node build/html.compile.js");
sh.exec("node build/style.compile.js");
sh.exec("rm -rf ./../../dist && mv dist ./../../");
