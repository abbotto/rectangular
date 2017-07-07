"use strict";

const fs = require("fs");
const sh = require("shelljs");
const getPath = require("./utility/get.path.js");

sh.rm("-rf", "./tmp");
sh.mkdir("./tmp");

if (!fs.existsSync(getPath() + "/dist")) {
	sh.mkdir(getPath() + "/dist");
}

if (!fs.existsSync(getPath() + "/dist/fonts")) {
	sh.mkdir(getPath() + "/dist/fonts");
}

if (!fs.existsSync(getPath() + "/dist/images")) {
	sh.mkdir(getPath() + "/dist/images");
}

