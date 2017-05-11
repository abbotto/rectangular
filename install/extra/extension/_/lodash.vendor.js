"use strict";

(() => {
	const lodashVendorService = function lodashVendorService($window) {
		return $window._;
	};
	
	angular
		.module("lodash.vendor", [])
		.factory("_", lodashVendorService)
	;
})();
