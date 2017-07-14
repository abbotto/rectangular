"use strict";

const {flattenDeep} = require("lodash");

module.exports = function parseAssets(obj) {
	const assets = [];
	Object.keys(obj).forEach((item) => assets.push(obj[item]));
	return flattenDeep(assets);
};
