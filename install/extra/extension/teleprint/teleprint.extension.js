"use strict";

(() => {
	const teleprintVendorService = function teleprintVendorService($window) {
		return $window.teleprint;
	};
	
	angular
		.module("teleprint.extension", [])
		.factory("teleprint$", teleprintVendorService)
	;
})();
