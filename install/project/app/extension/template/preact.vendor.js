"use strict";

(() => {
	const preactVendorService = function preactVendorService() {
		// eslint-disable-next-line no-undef
		return preact;
	};

	angular
		.module("preact.vendor.service", [])
		.factory("template$", preactVendorService)
	;
})();
