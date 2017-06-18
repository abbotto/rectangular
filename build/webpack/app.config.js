const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require("path");
const webpack = require("webpack");
const getPath = require("../utility/get.path.js");
const vendorStatic = require(getPath() + "/dev/asset/vendor.global.js.json");
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const uglifyOpts = require(__dirname + "/uglify.json");

uglifyOpts.output.comments = (node, comment) => {
	const text = comment.value;
	const type = comment.type;
	if (type === "comment2") {
		return /@copyright/i.test(text);
	}
	return false;
};

const plugins = [
	new webpack.DefinePlugin({
		"process.env": {
			NODE_ENV: JSON.stringify("production")
		}
	}),
	new UglifyJsPlugin(uglifyOpts),
	new webpack.optimize.AggressiveMergingPlugin(),
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
		filename: 'vendor.import.js',
		minChunks(module, count) {
			const context = module.context;
			return context
				&& context.indexOf('node_modules') > -1
				&& context.indexOf('node_modules/rectangular') < 0
			;
		}
	})
];

if (process.env.NODE_ENV === "development") {
	plugins.push(
		new BundleAnalyzerPlugin({
			analyzerMode: 'static'
		})
	);
}
else if (process.env.NODE_ENV === "production") {
	plugins.push(
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.(js)$/,
			threshold: 10240,
			minRatio: 0.8
		})
	);
}

const config = {
	cache: true,
	entry: {
		app: __dirname + "/../../tmp/app/app.module.js"
	},
	output: {
		path: getPath() + "/dist",
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
	plugins
};

module.exports = config;
