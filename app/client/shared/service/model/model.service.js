"use strict";

(() => {
	const modelFactory = function modelFactory(appModel) {
		const factory = {
			_model: (key) => {
				return appModel[key];
			},
			get: (key) => {
				return angular.fromJson(factory._model(key));
			},
			mixin: (key, toBeMerged, deep) => {
				// Get the mixin data
				const toBeMixed = factory.get(key);
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
			}
		};
		
		return factory;
	};
	
	angular
		.module("model.service", ["app.model"])
		.factory("model$", modelFactory)
	;
})();
