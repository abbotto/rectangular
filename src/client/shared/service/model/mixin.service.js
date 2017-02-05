"use strict";

(() => {
	const mixinService = function mixinService(model$) {
		return (key, toBeMerged, deep) => {
			// Get the mixin data
			const toBeMixed = model$(key);
			// Add mixin as beginning argument
			toBeMerged.unshift(toBeMixed);
			// Deep merge
			if (deep) {
				// eslint-disable-next-line prefer-reflect
				return angular.merge.apply(angular.merge, toBeMerged);
			}
			// Shallow merge
			// eslint-disable-next-line prefer-reflect
			return angular.extend.apply(angular.extend, toBeMerged);
		};
	};
	
	angular.module("mixin.service", ["model.service"]).factory("mixin$", mixinService);
})();
