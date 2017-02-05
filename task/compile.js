"use strict";

const sh = require("shelljs");
sh.exec("node task/reset.js");
sh.exec("node task/app.intro.js");
sh.exec("node task/script.compile.js");
sh.exec("node task/html.compile.js");
sh.exec("node task/style.compile.js");
