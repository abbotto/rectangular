"use strict";

const dir = __dirname.replace("rectangular/src", "rectangular");
const fs = require("fs");
const glob = require("glob-concat");
const parseAssets = require(__dirname + "/utility/parseAssets.js");
const path = require("path");
const purify = require("purify-css");
const sh = require("shelljs");

module.exports = function style(deps, root) {
	const cssFiles = [];
	const styles = parseAssets(deps);
	const sassFiles = [];
	const tmpAppCSS = root + "/tmp/app.scss";
	const nodeSASS = "chmod +x " + dir + "/node_modules/node-sass/bin/node-sass && " + dir + "/node_modules/node-sass/bin/node-sass";
	const postCSS = "chmod +x " + dir + "/node_modules/postcss/lib/postcss.js && node " + dir + "/node_modules/postcss/lib/postcss.js";
	
	styles.forEach((filePath, i) => {
		styles[i] = filePath.replace("./", root + "/");
	});

	const styleFiles = glob.sync(styles);
	
	styleFiles.forEach((file) => {
		path.extname(file) === ".css" && cssFiles.push(file);
		path.extname(file) === ".scss" && sassFiles.push(file);
	});
	
	sh.exec("touch " + "dist/app.css");
	
	sh.cat(sassFiles).to(tmpAppCSS);
	sh.exec(nodeSASS + " -q --output-style compressed --include-path scss " + tmpAppCSS + " " + tmpAppCSS);
	sh.exec(postCSS + " --use autoprefixer -b 'last 5 versions' < " + tmpAppCSS);
	
	cssFiles.push(tmpAppCSS);
	sh.cat(cssFiles).to("dist/app.css");
	
	const appCSS = fs.readFileSync(
		"dist/app.css",
		"utf8"
	);

	const content = [
		root + "/app/**/*.js",
		root + "/app/**/*.html"
	];

	const options = {
		info: false,
		minify: true,
		output: "dist/app.css",
		rejected: true
	};

	purify(content, appCSS, options);
};
