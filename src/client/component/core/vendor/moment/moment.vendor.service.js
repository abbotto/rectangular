/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	const momentVendorService = function momentVendorService(moment) {
		return moment;
	};

	angular
	.module("moment.vendor.service", [])
	.factory("moment$", momentVendorService);
})();