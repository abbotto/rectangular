const path = require("path");
const webpack = require("webpack");

const config = {
	entry: {
		main: __dirname + "/../../tmp/spec.js"
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
				NODE_ENV: JSON.stringify("development")
			}
		}),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new webpack.optimize.AggressiveMergingPlugin()
	]
};

module.exports = config;
