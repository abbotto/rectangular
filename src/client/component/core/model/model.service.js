/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	const modelService = function modelService(appModel) {
		return (key) => {
			return JSON.parse(appModel[key]);
		};
	};

	angular.module("model.service", [
		"appModel"
	])
	.factory("model$", modelService);
})();
