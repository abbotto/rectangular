const path = require("path");
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const uglifyOpts = require(__dirname + "/uglify.config.json");

uglifyOpts.output.comments = (node, comment) => {
	const text = comment.value;
	const type = comment.type;
	if (type === "comment2") {
		return /@copyright/i.test(text);
	}
	return false;
};

const config = {
	entry: {
		main: __dirname + "/../../tmp/app/app.module.js"
	},
	output: {
		path: path.join(__dirname, "/../../tmp"),
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
		new UglifyJsPlugin(uglifyOpts),
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
