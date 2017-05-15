"use strict";

import Immutable from "immutable";

(() => {
	const immutableVendorService = function immutableVendorService() {
		return Immutable;
	};
	
	angular
		.module("immutable.vendor.service", [])
		.factory("data$", immutableVendorService)
	;
})();
