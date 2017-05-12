"use strict";

(() => {
	const preactVendorService = function preactVendorService(preact) {
		return preact;
	};

	angular
		.module("preact.vendor.service", ["preact"])
		.factory("template$", preactVendorService)
	;
})();
