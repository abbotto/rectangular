/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	const excuseService = function excuseService(model$) {
		return () => {
			const model = model$("excuse/excuse.model.json");
			const len = model.length;
			return model[Math.floor(Math.random() * len)];
		};
	};

	angular.module("excuse.service", [
		"model.service"
	])
	.factory("excuse$", excuseService);
})();
