"use strict";

const restangularVendorService = function restangularVendorService(Restangular) {
	return Restangular;
};

export default angular
	.module("restangular.vendor.service", ["restangular"])
	.factory("rest$", restangularVendorService)
	.name
;
