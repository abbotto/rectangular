/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	const merge = function merge(objects) {
		// Set some vars
		const args = Array.prototype.slice.call(arguments);
		const deep = (typeof args[0] === "boolean") ? args.shift() : false;
		const copy = {};
		const len = args.length;
		let i = 0;
		for (; i < len; i += 1) {
			const source = args[i];
			if (!source) continue;
			for (const property in source) {
				// Deep
				if (deep === true && Object.prototype.toString.call(source[property]) === "[object Object]") {
					copy[property] = copy[property] || {};
					copy[property] = merge(true, copy[property], source[property]);
				}
				// Shallow
				else copy[property] = source[property];
			}
		}
		return copy;
	};

	const mixinService = function mixinService(model$) {
		return (key, toBeMerged, deep) => {
			// Get the mixin data
			const toBeMixed = model$(key);
			// Add mixin as beginning argument
			toBeMerged.unshift(toBeMixed);
			// Deep merge?
			if (deep) toBeMerged.unshift(true);
			return merge.apply(merge, toBeMerged);
		};
	};

	angular
	.module("mixin.service", [
		"model.service"
	])
	.factory("mixin$", mixinService);
})();
