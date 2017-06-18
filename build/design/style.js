"use strict";

const fs = require("fs");
const sh = require("shelljs");
const finder = require("glob-concat");
const flatten = require("../utility/flatten.js");
const setPath = require("../utility/set.path.js");
const getPath = require("../utility/get.path.js");
const tmpCSSPath = "tmp/app.scss";
const postCSS = "chmod +x node_modules/postcss/lib/postcss.js && node node_modules/postcss/lib/postcss.js";
const nodeSASS = "chmod +x node_modules/node-sass/bin/node-sass && node_modules/node-sass/bin/node-sass";

const vendorFiles = require(getPath() + "/dev/asset/vendor.scss.json");
const vendorKeys = Object.keys(vendorFiles);
let assets = [];

vendorKeys.forEach((item) => assets.push(vendorFiles[item]) );
assets = setPath(flatten(assets));

if (!fs.existsSync(getPath() + "/dist")) {
	sh.exec("mkdir " + getPath() + "/dist");
}

const appScss = finder.sync([
	getPath() + "/app/design/style/vendor.scss",
	getPath() + "/app/design/style/scaffold.scss",
	getPath() + "/app/**/*.scss"
]);

sh.exec("touch " + getPath() + "/dist/app.css");
sh.exec("node_modules/stylelint/bin/stylelint.js " + getPath() + "/app/**/*.scss");

sh.cat(appScss).to(tmpCSSPath);
sh.exec(nodeSASS + " -q --output-style compressed --include-path scss " + tmpCSSPath + " " + tmpCSSPath);
sh.exec(postCSS + " --use autoprefixer -b 'last 5 versions' < " + tmpCSSPath);

assets.push(tmpCSSPath);
sh.cat(assets).to(getPath() + "/dist/app.css");
