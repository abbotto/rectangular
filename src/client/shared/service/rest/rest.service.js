(() => {
	"use strict";

	const restService = function restService(Restangular) {
		return Restangular;
	};

	angular.module("rest.service", [
		"restangular.extension"
	]).factory("rest$", restService);
})();
