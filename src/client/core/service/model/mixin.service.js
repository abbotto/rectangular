/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	angular.module("mixin.service", [
		"model.service"
	]);
	
	const mixinService = function mixinService(model$) {
		return (key, toBeMerged, deep) => {
			// Get the mixin data
			const toBeMixed = model$(key);
			// Add mixin as beginning argument
			toBeMerged.unshift(toBeMixed);
			// Deep merge
			if (deep) return angular.merge.apply(angular.merge, toBeMerged);
			// Shallow merge
			return angular.extend.apply(angular.extend, toBeMerged);
		};
	};
	
	angular.module("mixin.service").factory("mixin$", mixinService);
})();
