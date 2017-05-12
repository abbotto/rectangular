"use strict";

(() => {
	const preactVendorService = function preactVendorService($templateCache) {
		// eslint-disable-next-line no-undef
		preact.template = (tpl) => {
			// eslint-disable-next-line no-undef
			return $templateCache.get(tpl);
		};
		
		// eslint-disable-next-line no-undef
		return preact;
	};

	angular
		.module("preact.vendor.service", [])
		.factory("view$", preactVendorService)
	;
})();
