"use strict";

(() => {
	const immutableVendorService = function immutableVendorService($window) {
		return $window.immutable;
	};
	
	angular
		.module("immutable.extension", [])
		.factory("immutable$", immutableVendorService)
	;
})();
