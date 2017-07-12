"use strict";

// ----------------------------------------------------------------
// Setup
// ----------------------------------------------------------------
require("dotenv").config();

const sh = require("shelljs");
const uglifyRules = require("./uglify.json");
const deps = require("./deps.json");
const isArg = (arg) => (process.argv.slice(2)).indexOf(arg) > -1;
const NODE_ENV = process.env.NODE_ENV;
const isProduction = NODE_ENV === "production";

// ----------------------------------------------------------------
// Build tasks
// ----------------------------------------------------------------
isArg("--clean") && sh.exec("rm -rf dist && mkdir dist && rm -rf tmp && mkdir tmp");
isArg("--env") && require("./dev/bundle/task/env.js")(".envrc", __dirname);
isArg("--font") && require("./dev/bundle/task/font.js")(deps.font, __dirname);
isArg("--image") && require("./dev/bundle/task/image.js")(deps.image, __dirname);
isArg("--model") && require("./dev/bundle/task/model.js")(deps.model, __dirname);
isArg("--route") && require("./dev/bundle/task/route.js")(["./app/**/*.route.js"], __dirname);
isArg("--script") && require("./dev/bundle/task/script.js")(deps.script, __dirname);
isArg("--style") && require("./dev/bundle/task/style.js")(deps.style, __dirname);
isArg("--template") && require("./dev/bundle/task/template.js")(deps.template, __dirname);
isArg("--index") && sh.exec("cp app/index.html dist/");

// ----------------------------------------------------------------
// Plugins
// ----------------------------------------------------------------
const {
	BabelPlugin,
	CSSPlugin,
	EnvPlugin,
	FuseBox,
	HTMLPlugin,
	SassPlugin,
	UglifyJSPlugin
} = require("fuse-box");

const plugins = [
	EnvPlugin({ NODE_ENV: isProduction ? "production" : "development" }),
	HTMLPlugin({ useDefault: true}),
	BabelPlugin(),
	SassPlugin({ outputStyle: "compressed" }),
	CSSPlugin()
];

isProduction && plugins.push(UglifyJSPlugin(uglifyRules));

// ----------------------------------------------------------------
// Initialize
// ----------------------------------------------------------------
const fuse = FuseBox.init({
	homeDir: "./",
	output: "dist/$name.js",
	cache: true,
	plugins
});

// ----------------------------------------------------------------
// Bundles
// ----------------------------------------------------------------
const vendor = fuse
	.bundle("vendor")
	.target("browser")
	.instructions("~ app/index.js")
;

const app = fuse
	.bundle("app")
	.target("browser")
	.sourceMaps(NODE_ENV === "development")
	.instructions("!> [app/index.js]")
;

if (isArg("--spec")) {
	require("./dev/bundle/task/spec.js")(deps.spec, __dirname);
	
	fuse
		.bundle("spec")
		.target("browser")
		.instructions("!> tmp/spec.auto.js")
	;
};

// ----------------------------------------------------------------
// Server
// ----------------------------------------------------------------
if (isArg("--server")) {
	fuse.dev({
		port: 4444,
		root: "dist",
		httpServer: true,
		socketURI: "ws://localhost:4444"
	});
	
	// Hot-module reload
	app.hmr().watch(__dirname + "/app/**/*.js");
	
	// Additional watch actions
	const watch = require("chokidar")
		.watch(
			[
				"app/**/*.*",
				"deps.json",
				"uglify.json",
			],
			{
				ignored: /[\/\\]\./,
				persistent: true
			}
		)
	;
	
	watch.on("change", function(path, stats) {
		sh.exec("node producer.js --env --font --index --image --model --route --script --style --template");
	});
}

// ----------------------------------------------------------------
// Run fuse-box
// ----------------------------------------------------------------
if (isArg("--build") || isArg("--server")) {
	sh.exec("node producer.js --env --font --index --image --model --route --script --style --template");
	
	fuse
		.run()
		.then(() => {
			if (isProduction) {
				sh.exec("gzip -c -8 " + "dist/legacy.js > dist/legacy.js.gz");
				sh.exec("gzip -c -8 " + "./dist/vendor.js > ./dist/vendor.js.gz");
				sh.exec("gzip -c -8 " + "./dist/app.js > ./dist/app.js.gz");
			}
		})
	;
}

module.exports = fuse;
