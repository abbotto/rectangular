"use strict";

const CleanCSS = require("clean-css");
const fs = require("fs");
const glob = require("glob-concat");
const nodeSASS = "chmod +x node_modules/node-sass/bin/node-sass && node_modules/node-sass/bin/node-sass";
const parseAssets = require(__dirname + "/utility/parseAssets.js");
const path = require("path");
const purify = require("purify-css");
const postCSS = "chmod +x node_modules/postcss/lib/postcss.js && node node_modules/postcss/lib/postcss.js";
const sh = require("shelljs");

module.exports = function style(deps, root, config) {
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
	sh.exec("node_modules/stylelint/bin/stylelint.js --config " + root + "/" + config + " " + root + "/app/**/*.scss");
	
	sh.cat(sassFiles).to(tmpAppCSS);
	sh.exec(nodeSASS + " -q --output-style compressed --include-path scss " + tmpAppCSS + " " + tmpAppCSS);
	sh.exec(postCSS + " --use autoprefixer -b 'last 5 versions' < " + tmpAppCSS);
	
	cssFiles.push(tmpAppCSS);
	sh.cat(cssFiles).to("dist/app.css");
	
	const appCSS = new CleanCSS({
		compatibility: "ie9"
	})
	.minify(fs.readFileSync(
		"dist/app.css",
		"utf8"
	))
	.styles;

	const content = [
		root + "/app/**/*.js",
		root + "/app/**/*.html"
	];

	const options = {
		output: "dist/app.css"
	};

	purify(content, appCSS, options);
};
