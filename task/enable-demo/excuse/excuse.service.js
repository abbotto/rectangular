/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	angular.module("excuse.service", [
		"model.service"
	]);
	
	const excuseService = function excuseService(model$) {
		return () => {
			const model = model$("excuse/excuse.data.json");
			const len = model.length;
			return model[Math.floor(Math.random() * len)];
		};
	};
	
	angular.module("excuse.service").factory("excuse$", excuseService);
})();
