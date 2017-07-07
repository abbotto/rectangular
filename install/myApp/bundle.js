require("dev/bundle/preflight.js")();
require("dotenv").config();

const sh = require("shelljs");
const NODE_ENV = process.env.NODE_ENV;

const {
	BabelPlugin,
	EnvPlugin,
	FuseBox,
	HTMLPlugin
} = require("fuse-box");

const fuse = FuseBox.init({
	homeDir: "app/",
	output: "dist/$name.js",
	plugins: [
		EnvPlugin({
			NODE_ENV: NODE_ENV === "production"
				? "production"
				: "development"
		}
		),
		HTMLPlugin({
			useDefault: true
		}),
		BabelPlugin()
	]
});

fuse
	.bundle("vendor")
	.target("browser")
	.instructions("~ **/**.{js}")
;

fuse
	.bundle("app")
	.target("browser")
	// .sourceMaps(!isProduction)
	.instructions("!> [index.js]")
;

fuse.run();

// GZIP the app bundle
sh.exec("gzip -c -8 " + "dist/app.js > dist/app.js.gz");
