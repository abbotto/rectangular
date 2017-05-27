const path = require("path");
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const config = {
	entry: {
		main: __dirname + "/tmp/app/app.module.js"
	},
	output: {
		path: path.join(__dirname, "/tmp"),
		filename: "app.js"
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
	module: {
		loaders: [{
			loader: "babel",
			test: /\.(js)?$/,
			exclude: /node_modules/
		}]
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("development")
			}
		}),
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new UglifyJsPlugin({
			comments: false,
			mangle: false,
			compress: {
				unused: true,
				dead_code: true,
				warnings: false,
				drop_debugger: true,
				conditionals: true,
				evaluate: true,
				drop_console: true,
				sequences: true,
				booleans: true
			}
		}),
		new webpack.optimize.AggressiveMergingPlugin(),
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.(js)$/,
			threshold: 10240,
			minRatio: 0.8
		})
	]
};

module.exports = config;
