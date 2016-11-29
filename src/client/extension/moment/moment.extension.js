/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	angular.module("moment.extension", []);
	
	const momentVendorService = function momentVendorService(moment) {
		return moment;
	};
	
	angular.module("moment.extension").factory("moment$", momentVendorService);
})();