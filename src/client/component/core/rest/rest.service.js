/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	const restService = function restService(Restangular) {
		return Restangular;
	};

	angular
	.module("rest.service", [
		"restangular.vendor.service"
	])
	.factory("rest$", restService);
})();
