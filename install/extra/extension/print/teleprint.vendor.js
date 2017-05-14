"use strict";

import teleprint from "teleprint";

(() => {
	const teleprintVendorService = function teleprintVendorService() {
		return teleprint;
	};
	
	angular
		.module("teleprint.vendor.service", [])
		.factory("print$", teleprintVendorService)
	;
})();
