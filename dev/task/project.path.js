"use strict";

module.exports = (arr) => {
	arr.forEach((e, i, a) => {
		a[i] = a[i].replace(".", "./../..");
	});
	
	return arr;
};
