/* eslint-plugin-disable angular */
(() => {
	const bluebirdVendorService = function bluebirdVendorService($window) {
		return $window.Promise;
	};

	angular
	.module("bluebird.vendor.service", [])
	.factory("bluebird$", bluebirdVendorService);
})();
