"use strict";

const glob = require("glob-concat");
const nodeSASS = "chmod +x node_modules/node-sass/bin/node-sass && node_modules/node-sass/bin/node-sass";
const postCSS = "chmod +x node_modules/postcss/lib/postcss.js && node node_modules/postcss/lib/postcss.js";
const sh = require("shelljs");
const tmpAppCSS = "tmp/app.scss";

module.exports = function sass(cfg) {
	cfg = cfg || {};
	
	const cssGlobalFiles = cfg.global || require("dev/utility/parseAssets.js")(
		require("dev/asset/global.style.json")
	);

	const sassAppFiles = glob.sync(cfg.app || [
		"app/design/style/vendor.scss",
		"app/design/style/scaffold.scss",
		"app/**/*.scss"
	]);

	sh.exec("touch " + "dist/app.css");
	sh.exec("node_modules/stylelint/bin/stylelint.js " + "app/**/*.scss");

	sh.cat(sassAppFiles).to(tmpAppCSS);
	sh.exec(nodeSASS + " -q --output-style compressed --include-path scss " + tmpAppCSS + " " + tmpAppCSS);
	sh.exec(postCSS + " --use autoprefixer -b 'last 5 versions' < " + tmpAppCSS);

	cssGlobalFiles.push(tmpAppCSS);
	sh.cat(cssGlobalFiles).to("dist/app.css");
};
