/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	angular.module("bluebird.extension", []);
	
	const bluebirdVendorService = function bluebirdVendorService($window) {
		return $window.Promise;
	};
	
	angular.module("bluebird.extension").factory("bluebird$", bluebirdVendorService);
})();
