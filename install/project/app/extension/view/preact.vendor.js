"use strict";

(() => {
	const preactVendorService = function preactVendorService($templateCache) {
		const HTMLtoJSX = require("htmltojsx");
		const converter = new HTMLtoJSX();

		// eslint-disable-next-line no-undef
		preact.template = (tpl) => {
			// eslint-disable-next-line no-undef
			return converter.convert($templateCache.get(tpl));
		};

		// eslint-disable-next-line no-undef
		return preact;
	};

	angular
		.module("preact.vendor.service", [])
		.factory("view$", preactVendorService)
		;
})();
