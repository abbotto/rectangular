"use strict";

const lodashVendorService = function lodashVendorService($window) {
	return $window._;
};

export default angular
	.module("lodash.vendor.service", [])
	.factory("_", lodashVendorService)
	.name
;
