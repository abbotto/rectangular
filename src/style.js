"use strict";

const dir = __dirname.replace("rectangular/src", "rectangular");
const fs = require("fs");
const glob = require("glob-concat");
const parseAssets = require(__dirname + "/utility/parseAssets.js");
const path = require("path");
const purify = require("purify-css");
const sh = require("shellcmd");

module.exports = function style(deps, root, purifyOptions) {
	const cssFiles = [];
	const styles = parseAssets(deps);
	const sassFiles = [];
	const tmpAppCSS = root + "/tmp/app.scss";
	const distAppCSS = root + "/dist/app.css";
	const nodeSASS = "chmod +x " + dir + "/node_modules/.bin/node-sass && " + dir + "/node_modules/.bin/node-sass";
	const postCSS = "chmod +x " + dir + "/node_modules/postcss/lib/postcss.js && node " + dir + "/node_modules/postcss/lib/postcss.js";

	styles.forEach((filePath, i) => {
		styles[i] = filePath.replace("./", root + "/");
	});

	const styleFiles = glob.sync(styles);

	styleFiles.forEach((file) => {
		path.extname(file) === ".css" && cssFiles.push(file);
		path.extname(file) === ".scss" && sassFiles.push(file);
	});

	sh(`rm -f ${distAppCSS} && touch ${distAppCSS}`);
	sh(`rm -f ${tmpAppCSS} && touch ${tmpAppCSS}`);
	
	sassFiles.forEach((file) => {
		sh("cat " + file + " >> " + tmpAppCSS);
	});

	sh(nodeSASS + " -q --output-style compressed --include-path scss " + tmpAppCSS + " " + tmpAppCSS);
	sh(postCSS + " --use autoprefixer -b 'last 5 versions' < " + tmpAppCSS);
	
	cssFiles.push(tmpAppCSS);

	cssFiles.forEach((file) => {
		sh("cat " + file + " >> " + distAppCSS);
	});

	const appCSS = fs.readFileSync(
		distAppCSS,
		"utf8"
	);

	const content = [
		root + "/app/**/*.js",
		root + "/app/**/*.html"
	];

	purify(content, appCSS.split("../fonts").join("fonts"), purifyOptions);
};
