require("dotenv").config();

const sh = require("shelljs");
const NODE_ENV = process.env.NODE_ENV;

// --------------------------------
// Start preflight
// --------------------------------
const deps = require("./deps.json");

sh.exec(
	"rm -rf dist && mkdir dist"
	+ " && mkdir dist/fonts"
	+ " && mkdir dist/images"
	+ " && rm -rf tmp && mkdir tmp"
);

require("./dev/bundle/task/env.js")(".envrc", __dirname);
require("./dev/bundle/task/font.js")(deps.font, __dirname);
require("./dev/bundle/task/image.js")(deps.image, __dirname);
require("./dev/bundle/task/model.js")(deps.model, __dirname);
require("./dev/bundle/task/route.js")(["./app/**/*.route.js"], __dirname);
require("./dev/bundle/task/script.js")(deps.script, __dirname);
require("./dev/bundle/task/style.js")(deps.style, __dirname);
require("./dev/bundle/task/template.js")(deps.template, __dirname);
// --------------------------------
// End preflight
// --------------------------------

const {
	BabelPlugin,
	EnvPlugin,
	FuseBox,
	HTMLPlugin
} = require("fuse-box");

const fuse = FuseBox.init({
	homeDir: "./",
	output: "dist/$name.js",
	plugins: [
		EnvPlugin({
			NODE_ENV: NODE_ENV === "production"
				? "production"
				: "development"
		}),
		HTMLPlugin({
			useDefault: true
		}),
		BabelPlugin()
	]
});

fuse
	.bundle("vendor")
	.target("browser")
	.instructions("~ [app/index.js]")
;

fuse
	.bundle("app")
	.target("browser")
	.sourceMaps(NODE_ENV === "development")
	.instructions("!> [app/index.js]")
;

fuse.run();

// GZIP the bundles
// sh.exec("gzip -c -8 " + "./dist/vendor.js > ./dist/vendor.js.gz");
// sh.exec("gzip -c -8 " + "./dist/app.js > ./dist/app.js.gz");
