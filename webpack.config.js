module.exports = {
	module: {
		loaders: [
			{
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ["es2015-without-strict"]
				}
			}
		]
	}
};
