"use strict";

(() => {
	angular.module("restangular.vendor", [
		"restangular"
	]);
	
	const restangularVendorService = function restangularVendorService(Restangular) {
		return Restangular;
	};

	angular
		.module("restangular.vendor.service", [])
		.factory("rest$", restangularVendorService)
	;
})();
