"use strict";

const glob = require("glob-concat");
const nodeSASS = "chmod +x node_modules/node-sass/bin/node-sass && node_modules/node-sass/bin/node-sass";
const postCSS = "chmod +x node_modules/postcss/lib/postcss.js && node node_modules/postcss/lib/postcss.js";
const sassVendorFiles = require("dev/utility/parseAssets.js")(require("dev/asset/global.scss.json"));
const sh = require("shelljs");
const tmpAppCSS = "tmp/app.scss";

const sassAppFiles = glob.sync([
	"app/design/style/vendor.scss",
	"app/design/style/scaffold.scss",
	"app/**/*.scss"
]);

module.exports = function sass() {
	sh.exec("touch " + "dist/app.css");
	sh.exec("node_modules/stylelint/bin/stylelint.js " + "app/**/*.scss");

	sh.cat(sassAppFiles).to(tmpAppCSS);
	sh.exec(nodeSASS + " -q --output-style compressed --include-path scss " + tmpAppCSS + " " + tmpAppCSS);
	sh.exec(postCSS + " --use autoprefixer -b 'last 5 versions' < " + tmpAppCSS);

	sassVendorFiles.push(tmpAppCSS);
	sh.cat(sassVendorFiles).to("dist/app.css");
};
