const {Sparky, FuseBox, UglifyJSPlugin, WebIndexPlugin, BabelPlugin} = require("fuse-box");
const getPath = require("../utility/get.path.js");

// Create FuseBox instance
const fuse = new FuseBox({
	standalone: false,
	homeDir: __dirname + "/../../tmp/app/",
  	// If you want to include source maps
	// sourceMap: {
	// 	bundleReference: "sourcemaps.js.map",
	// 	outFile: "./dist/sourcemaps.js.map"
	// },
	// File path to put the output file
	outFile: getPath() + "/dist",
	// Add plugins in order to compile CSS or babel
	plugins: [
		// fuse.CSSPlugin(),
		UglifyJSPlugin(),
		BabelPlugin()
	]
});

const vendor = fuse
	.bundle("vendor")
	.instructions("~ " + __dirname + "/../../tmp/app/**/**.{js}")
;

(process.env === "development") && vendor.hmr();

fuse.run();
