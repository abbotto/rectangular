"use strict";

const sh = require("shelljs");
sh.rm("-rf", "./tmp");
sh.mkdir("./tmp");
sh.rm("-rf", "./dist");
sh.mkdir("./dist");
sh.mkdir("./dist/fonts");
sh.mkdir("./dist/images");

