"use strict";

const glob = require("glob-concat");
const nodeSASS = "chmod +x node_modules/node-sass/bin/node-sass && node_modules/node-sass/bin/node-sass";
const parseAssets = require("../../../dev/utility/parseAssets.js");
const path = require("path");
const postCSS = "chmod +x node_modules/postcss/lib/postcss.js && node node_modules/postcss/lib/postcss.js";
const sh = require("shelljs");

module.exports = function style(deps, root) {
	const cssFiles = [];
	const styles = parseAssets(deps);
	const sassFiles = [];
	const tmpAppCSS = root + "/tmp/app.scss";

	styles.forEach((filePath, i) => {
		styles[i] = filePath.replace("./", root + "/");
	});

	const styleFiles = glob.sync(styles);
	
	styleFiles.forEach((file) => {
		path.extname(file) === ".css" && cssFiles.push(file);
		path.extname(file) === ".scss" && sassFiles.push(file);
	});
	
	sh.exec("touch " + "dist/app.css");
	sh.exec("node_modules/stylelint/bin/stylelint.js " + "app/**/*.scss");
	
	sh.cat(sassFiles).to(tmpAppCSS);
	sh.exec(nodeSASS + " -q --output-style compressed --include-path scss " + tmpAppCSS + " " + tmpAppCSS);
	sh.exec(postCSS + " --use autoprefixer -b 'last 5 versions' < " + tmpAppCSS);
	
	cssFiles.push(tmpAppCSS);
	sh.cat(cssFiles).to("dist/app.css");
};
