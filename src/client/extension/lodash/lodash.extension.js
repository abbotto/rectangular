/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	angular.module("lodash.extension", []);
	
	const lodashVendorService = function lodashVendorService($window) {
		return $window._;
	};
	
	angular.module("lodash.extension").factory("lodash$", lodashVendorService);
})();