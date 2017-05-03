"use strict";

module.exports = (arr, val) => {
	const i = arr.indexOf(val);
	(i > -1) && arr.splice(i, 1);
	return arr;
};
