"use strict";

(() => {
	const modelService = function modelService(appModel) {
		return (key) => {
			return angular.fromJson(appModel[key]);
		};
	};
	
	angular.module("model.service", ["app.model"]).factory("model$", modelService);
})();
