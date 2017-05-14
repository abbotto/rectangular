module.exports = {
	module: {
		loaders: [
			{
				loader: "babel-loader",
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				query: {
					presets: ["es2015"]
				}
			}
		]
	}
};
