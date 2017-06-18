"use strict";

const sh = require("shelljs");

sh.exec("node build/design/style.js");
sh.exec("node build/design/image.js");
sh.exec("node build/design/font.js");
