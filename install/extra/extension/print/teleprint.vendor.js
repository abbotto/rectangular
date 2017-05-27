"use strict";

const teleprintVendorService = function teleprintVendorService($window) {
	return $window.teleprint;
};

export default angular
	.module("teleprint.vendor.service", [])
	.factory("print$", teleprintVendorService)
	.name
;

