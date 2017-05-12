"use strict";

(() => {
	const reactVendorService = function reactVendorService($templateCache) {
		// eslint-disable-next-line no-undef
		React.template = (tpl) => {
			// eslint-disable-next-line no-undef
			return $templateCache.get(tpl);
		};
		
		// eslint-disable-next-line no-undef
		return React;
	};

	angular
		.module("react.vendor.service", [])
		.factory("view$", reactVendorService)
	;
})();
