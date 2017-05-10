"use strict";

(() => {
	const immutableVendorService = function immutableVendorService($window) {
		return $window.Immutable;
	};
	
	angular
		.module("immutable.extension", [])
		.factory("immutable$", immutableVendorService)
	;
})();
