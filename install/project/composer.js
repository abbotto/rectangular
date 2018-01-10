"use strict";

// ----------------------------------------------------------------
// Setup
// ----------------------------------------------------------------
require("dotenv").config();

const {NODE_ENV} = process.env;
const fs = require("fs");
const glob = require("glob-concat");
const rectangular = require("rectangular");
const sh = require("shellcmd");
const babelRules = require("./dev/babel.json");
const deps = require("./dev/deps.json");
const markdownToHtml = require("./dev/markdown.js");
const purifyRules = require("./dev/purify.json");
const uglifyRules = require("./dev/uglify.json");
const isArg = (arg) => (process.argv.slice(2)).indexOf(arg) > -1;
let isProduction = NODE_ENV === "production";

// ----------------------------------------------------------------
// Build tasks
// ----------------------------------------------------------------
isArg("--clean") && sh("rm -rf dist && mkdir dist && rm -rf tmp && mkdir tmp");
isArg("--doc") && sh("node node_modules/jsdoc/jsdoc.js -r -c dev/jsdoc.json app/");
isArg("--doc") && markdownToHtml();
isArg("--bump-patch") && sh("gulp bump-patch --gulpfile dev/gulp.js");
isArg("--bump-minor") && sh("gulp bump-minor --gulpfile dev/gulp.js");
isArg("--bump-major") && sh("gulp bump-major --gulpfile dev/gulp.js");
isArg("--env") && rectangular.env(".envrc", __dirname);
isArg("--route") && rectangular.routes(deps.route, __dirname);
isArg("--script") && rectangular.scripts(deps.script, __dirname);
isArg("--style") && rectangular.styles(deps.style, __dirname, purifyRules);
isArg("--font") && rectangular.fonts(deps.font, __dirname);
isArg("--image") && rectangular.images(deps.image, __dirname);
isArg("--template") && rectangular.templates(deps.template, __dirname);
if (isArg("--production")) isProduction = true;

// ----------------------------------------------------------------
// Plugins
// ----------------------------------------------------------------
const {
	JSONPlugin,
	BabelPlugin,
	CSSPlugin,
	EnvPlugin,
	FuseBox,
	HTMLPlugin,
	SassPlugin,
	UglifyJSPlugin,
	WebIndexPlugin
} = require("fuse-box");

const plugins = [
	EnvPlugin({NODE_ENV: isProduction ? "production" : "development"}),
	HTMLPlugin({useDefault: true}),
	JSONPlugin(),
	BabelPlugin(babelRules),
	SassPlugin({outputStyle: "compressed"}),
	CSSPlugin(),
	WebIndexPlugin({template: "app/index.html"}),
	isProduction && UglifyJSPlugin(uglifyRules)
];

// ----------------------------------------------------------------
// Initialize FuseBox
// ----------------------------------------------------------------
const fuse = FuseBox.init({
	homeDir: "./",
	output: "dist/$name.js",
	cache: true,
	plugins
});

// ----------------------------------------------------------------
// Code Bundles
// ----------------------------------------------------------------
const vendor = fuse
	.bundle("vendor")
	.target("browser")
	.instructions("~ app/index.js")
;

const app = fuse
	.bundle("app")
	.target("browser")
	.sourceMaps(!isProduction)
	.instructions("!> [app/index.js]")
;

isArg("--spec") && fuse
	.bundle("spec")
	.target("browser")
	.instructions("!> tmp/spec.auto.js")
;

// ----------------------------------------------------------------
// Server
// ----------------------------------------------------------------
isArg("--server") && require("./dev/server.js")(fuse, app);

// ----------------------------------------------------------------
// Build
// ----------------------------------------------------------------
if (isArg("--build") || isArg("--server") || isArg("--spec")) {
	sh("node composer.js --env --font --index --image --route --script --style --template --clean");
	isArg("--spec") && rectangular.specs(deps.spec, __dirname);
	
	fuse
		.run()
		.then(() => {
			if (isProduction) {
				sh("gzip -c -8 " + "dist/legacy.js > dist/legacy.js.gz");
				sh("gzip -c -8 " + "./dist/vendor.js > ./dist/vendor.js.gz");
				sh("gzip -c -8 " + "./dist/app.js > ./dist/app.js.gz");
				sh("gzip -c -8 " + "./dist/app.css > ./dist/app.css.gz");
			}
		})
	;
}

module.exports = fuse;
