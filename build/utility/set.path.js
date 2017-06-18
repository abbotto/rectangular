"use strict";

module.exports = (arr) => {
	const getPath = require("./get.path.js");
	
	arr.forEach((e, i, a) => {
		a[i] = a[i].replace(".", getPath());
	});
	
	return arr;
};
