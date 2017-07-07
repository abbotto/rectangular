"use strict";

module.exports = (arr) => {
	const flatten = (arr) => {
		return arr.reduce((flat, toFlatten) => {
			return flat
				.concat(
					Array.isArray(toFlatten)
						? flatten(toFlatten)
						: toFlatten
					)
				;
		}, []);
	};
	
	return flatten(arr);
};
