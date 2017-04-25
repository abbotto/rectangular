"use strict";

const sh = require("shelljs");
const fs = require("fs");
const finder = require("glob-concat");
const appSCSS = finder.sync(require("./asset/source.scss.json"));
const tmpCSS = "tmp/source.scss";

// Commands
const postCSS = "chmod +x node_modules/postcss/lib/postcss.js && node node_modules/postcss/lib/postcss.js";
const nodeSASS = "chmod +x node_modules/node-sass/bin/node-sass && node_modules/node-sass/bin/node-sass";

// Vendor files
const vendorJSON = finder.sync(require("./asset/vendor.scss.json"));
const tmpVendorJSON = !!fs.exists("./tmp/vendor.scss.json") ? finder.sync(require("./tmp/vendor.scss.json")) : [];
if (!!fs.exists("./tmp/vendor.scss.json")) sh.cat(tmpVendorJSON).to(vendorJSON);

// Preflight
sh.exec("node_modules/stylelint/lib/cli.js app/**/*.scss");
sh.exec("node dev/task/font.copy.js");
sh.exec("node dev/task/image.copy.js");

// Build
sh.cat(appSCSS).to(tmpCSS);
sh.exec(nodeSASS + " -q --output-style compressed --include-path scss " + tmpCSS + " " + tmpCSS);
sh.exec(postCSS + " --use autoprefixer -b 'last 5 versions' < " + tmpCSS);
vendorJSON.push(tmpCSS);
sh.cat(vendorJSON).to("dist/app.css");
