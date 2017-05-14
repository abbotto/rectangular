"use strict";

import Immutable from "immutable";

(() => {
	const immutableVendorService = function immutableVendorService() {
		// eslint-disable-next-line no-undef
		return Immutable;
	};
	
	angular
		.module("immutable.vendor.service", [])
		.factory("data$", immutableVendorService)
	;
})();
