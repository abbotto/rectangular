"use strict";

(() => {
	const restangularVendorService = function restangularVendorService(Restangular) {
		return Restangular;
	};

	angular
		.module("restangular.vendor.service", ["restangular"])
		.factory("rest$", restangularVendorService)
	;
})();
