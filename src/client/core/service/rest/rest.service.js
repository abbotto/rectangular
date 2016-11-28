/* eslint-plugin-disable angular */
(() => {
	"use strict";

	angular.module("rest.service", [
		"restangular.extension"
	]);

	const restService = function restService(Restangular) {
		return Restangular;
	};

	angular.module("rest.service").factory("rest$", restService);
})();
