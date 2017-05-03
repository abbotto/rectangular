"use strict";

module.exports = (arr, val) => {
	const i = arr.indexOf(val);
	return (i > -1) ? arr.splice(i, 1) : arr;
};
