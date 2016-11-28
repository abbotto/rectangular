/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	angular.module("model.service", [
		"app.model"
	]);
	
	const modelService = function modelService(appModel) {
		return (key) => {
			return JSON.parse(appModel[key]);
		};
	};
	
	angular.module("model.service").factory("model$", modelService);
})();
