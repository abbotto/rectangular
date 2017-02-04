(() => {
	"use strict";
	
	const momentVendorService = function momentVendorService(moment) {
		return moment;
	};
	
	angular.module("moment.extension", []).factory("moment$", momentVendorService);
})();