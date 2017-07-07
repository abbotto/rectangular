require("dev/bundle/preflight.js")();
require("dotenv").config();

const sh = require("shelljs");
const NODE_ENV = process.env.NODE_ENV;

const {
	BabelPlugin,
	EnvPlugin,
	FuseBox,
	HTMLPlugin,
	// QuantumPlugin
	SassPlugin,
	CSSPlugin
	// WebIndexPlugin,
	// TypeScriptHelpers,
	// JSONPlugin,
	// HTMLPlugin,
	// Sparky,
} = require("fuse-box");

const fuse = FuseBox.init({
	homeDir: "app/",
	output: "dist/$name.js",
	plugins: [
		EnvPlugin(
			{
				NODE_ENV: NODE_ENV === "production"
					? "production"
					: "development"
			}
		),
		// WebIndexPlugin({
		// 	title: 'FuseBox + Angular',
		// 	template: 'src/index.html',
		// }), [

		// ],
		SassPlugin({
			outputStyle: "compressed"
		}),
		CSSPlugin(),
		// JSONPlugin(),
		// HTMLPlugin({
		// 	useDefault: false,
		// }),
		HTMLPlugin({
			useDefault: true
		}),
		BabelPlugin()
		// http://fuse-box.org/page/quantum
		// QuantumPlugin({
		// 	browser: true,
		// 	uglify: true,
		// 	ensureES5 : true
		// })
	]
});

fuse
	.bundle("vendor-import")
	.target("browser")
	.instructions("~ **/**.{js,ts}")
;

fuse
	.bundle("app")
	.target("browser")
	// .sourceMaps(!isProduction)
	.instructions("!> [app.module.js]")
;

fuse.run();

// GZIP the app bundle
sh.exec("gzip -c -8 " + "dist/app.js > dist/app.js.gz");
