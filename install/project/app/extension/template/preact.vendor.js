"use strict";

(() => {
	const preactVendorService = function preactVendorService($window) {
		return $window.preact;
	};

	angular
		.module("preact.vendor.service", ["preact"])
		.factory("template$", preactVendorService)
	;
})();
