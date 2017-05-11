"use strict";

(() => {
	const teleprintVendorService = function teleprintVendorService($window) {
		return $window.teleprint;
	};
	
	angular
		.module("teleprint.vendor.service", [])
		.factory("print$", teleprintVendorService)
	;
})();
