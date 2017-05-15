"use strict";

(() => {
	const momentVendorService = function momentVendorService($window) {
		return $window.moment;
	};
	
	const momentVendorDirective = function momentVendorDirective($injector) {
		return angular.copy($injector.get("angularMoment"))[0];
	};
	
	angular
		.module("moment.vendor.service", [])
		.factory("date$", momentVendorService)
	;
	
	angular
		.module("moment.vendor.directive", [])
		.directive("date", momentVendorDirective)
	;
})();
