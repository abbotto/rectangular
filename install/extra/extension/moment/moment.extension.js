"use strict";

(() => {
	const momentVendorService = function momentVendorService($window) {
		return $window.moment;
	};
	
	angular
		.module("moment.extension", [])
		.factory("moment$", momentVendorService)
	;
})();
