"use strict";

(() => {
	const immutableVendorService = function immutableVendorService() {
		// eslint-disable-next-line no-undef
		return Immutable;
	};
	
	angular
		.module("immutable.extension", [])
		.factory("immutable$", immutableVendorService)
	;
})();
