const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
		loaders: [
			{
				loader: "babel",
				test: /\.(js)?$/,
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new UglifyJSPlugin()
	]
};

module.exports = config;
