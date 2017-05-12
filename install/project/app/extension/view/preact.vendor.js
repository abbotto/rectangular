"use strict";

(() => {
	const preactVendorService = function preactVendorService($templateCache) {
		// eslint-disable-next-line no-undef
		preact.template = (tpl) => {
			const el = document.createElement("div");
			el.innerHTML = $templateCache.get(tpl);
			return el;
		};
		
		// eslint-disable-next-line no-undef
		return preact;
	};

	angular
		.module("preact.vendor.service", [])
		.factory("view$", preactVendorService)
	;
})();
