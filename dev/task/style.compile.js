"use strict";

const sh = require("shelljs");
const fs = require("fs");
const finder = require("glob-concat");
const setPath = require("./set.path.js");
const getPath = require("./get.path.js");
const tmpCSSPath = "tmp/source.scss";

const sourceJSON = setPath(finder.sync(require(getPath() + "/dev/asset/source.scss.json")));
const vendorJSON = setPath(require(getPath() + "/dev/asset/vendor.scss.json"));

const postCSS = "chmod +x node_modules/postcss/lib/postcss.js && node node_modules/postcss/lib/postcss.js";
const nodeSASS = "chmod +x node_modules/node-sass/bin/node-sass && node_modules/node-sass/bin/node-sass";

// Preflight
sh.exec("node_modules/stylelint/bin/stylelint.js " + getPath() + "/app/**/*.scss");
sh.exec("node dev/task/font.copy.js");
sh.exec("node dev/task/image.copy.js");

// Build
sh.cat(sourceJSON).to(tmpCSSPath);

sh.exec(nodeSASS + " -q --output-style compressed --include-path scss " + tmpCSSPath + " " + tmpCSSPath);
sh.exec(postCSS + " --use autoprefixer -b 'last 5 versions' < " + tmpCSSPath);

vendorJSON.push(tmpCSSPath);
sh.cat(vendorJSON).to("dist/app.css");
