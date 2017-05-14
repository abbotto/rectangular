"use strict";

import _ from "lodash";

(() => {
	const lodashVendorService = function lodashVendorService() {
		return _;
	};
	
	angular
		.module("lodash.vendor.service", [])
		.factory("_", lodashVendorService)
	;
})();
