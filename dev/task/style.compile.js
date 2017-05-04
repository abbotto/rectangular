"use strict";

const sh = require("shelljs");
const fs = require("fs");
const finder = require("glob-concat");
const projectPath = require("./project.path.js");
const tmpCSSPath = "tmp/source.scss";

const sourceJSON = projectPath(finder.sync(require(__dirname.split("/node_modules/rectangular")[0] + "/dev/asset/source.scss.json")));
const vendorJSON = projectPath(require(__dirname.split("/node_modules/rectangular")[0] + "/dev/asset/vendor.scss.json"));

const postCSS = "chmod +x node_modules/postcss/lib/postcss.js && node node_modules/postcss/lib/postcss.js";
const nodeSASS = "chmod +x node_modules/node-sass/bin/node-sass && node_modules/node-sass/bin/node-sass";

// Preflight
sh.exec("node_modules/stylelint/bin/stylelint.js " + __dirname.split("/node_modules/rectangular")[0] + "/app/**/*.scss");
sh.exec("node dev/task/font.copy.js");
sh.exec("node dev/task/image.copy.js");

// Build
sh.cat(sourceJSON).to(tmpCSSPath);

sh.exec(nodeSASS + " -q --output-style compressed --include-path scss " + tmpCSSPath + " " + tmpCSSPath);
sh.exec(postCSS + " --use autoprefixer -b 'last 5 versions' < " + tmpCSSPath);

vendorJSON.push(tmpCSSPath);
sh.cat(vendorJSON).to("dist/app.css");
