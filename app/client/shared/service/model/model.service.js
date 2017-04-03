"use strict";

(() => {
	const modelFactory = function modelFactory(appModel) {
		const factory = {
			_constant: (key) => {
				return appModel[key];
			},
			get: (key) => {
				return angular
					.fromJson(factory._constant(key))
				;
			}
		};
		
		return factory;
	};
	
	angular.module("model.service", ["app.model"]).factory("model$", modelFactory);
})();
