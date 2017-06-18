"use strict";

const fs = require("fs");
const sh = require("shelljs");
const zlib = require("zlib");
const join = require("./utility/join.js");
const flatten = require("./utility/flatten.js");
const setPath = require("./utility/set.path.js");
const getPath = require("./utility/get.path.js");

const vendorFiles = require(getPath() + "/dev/asset/vendor.global.js.json");
const vendorKeys = Object.keys(vendorFiles);
let assets = [];

vendorKeys.forEach((item) => assets.push(vendorFiles[item]) );
assets = setPath(flatten(assets));

if (!fs.existsSync(getPath() + "/dist")) {
	sh.exec("mkdir " + getPath() + "/dist");
}

// Write the output to a file
fs.writeFileSync(getPath() + "/dist/vendor.global.js", join(assets), "utf8");
sh.exec("gzip -c -8 " + getPath() + "/dist/vendor.global.js > " + getPath() + "/dist/vendor.global.js.gz");
