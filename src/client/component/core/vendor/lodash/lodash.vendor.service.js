/* eslint-plugin-disable angular */
(() => {
	const lodashVendorService = function lodashVendorService($window) {
		return $window._;
	};

	angular
	.module("lodash.vendor.service", [])
	.factory("lodash$", lodashVendorService);
})();