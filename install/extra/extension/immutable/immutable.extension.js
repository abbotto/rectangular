"use strict";

(() => {
	const immutableVendorService = function immutableVendorService(Immutable) {
		return Immutable;
	};
	
	angular
		.module("immutable.extension", [])
		.factory("immutable$", immutableVendorService)
	;
})();
