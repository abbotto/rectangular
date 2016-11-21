/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	const lodashVendorService = function lodashVendorService($window) {
		return $window._;
	};

	angular
	.module("lodash.extension", [])
	.factory("lodash$", lodashVendorService);
})();