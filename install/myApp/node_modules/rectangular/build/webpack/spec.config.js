const path = require("path");
const webpack = require("webpack");

const config = {
	entry: {
		spec: __dirname + "/../../tmp/spec.js"
	},
	output: {
		path: path.join(__dirname, "/../../tmp"),
		filename: "spec.js"
	},
	externals: {
		angular: "angular"
	},
	resolve: {
		modules: [
			"node_modules",
			"tmp"
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			filename: "vendor.import.js",
			minChunks(module, count) {
				const context = module.context;
				return context
					&& context.indexOf("node_modules") > -1
					&& context.indexOf("node_modules/rectangular") < 0
				;
			}
		})
	]
};

module.exports = config;
