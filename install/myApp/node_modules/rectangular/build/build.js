"use strict";

const sh = require("shelljs");

sh.exec("node build/intro.js");
sh.exec("node build/reset.js");
sh.exec("node build/vendor.js");
sh.exec("node build/script.js");
sh.exec("node build/design.js");
sh.exec("node build/index.js");
