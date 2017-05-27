"use strict";

const momentVendorService = function momentVendorService($window) {
	return $window.moment;
};

export default angular
	.module("moment.vendor.service", [])
	.factory("date$", momentVendorService)
	.name
;
