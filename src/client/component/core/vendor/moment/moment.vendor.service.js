/* eslint-plugin-disable angular */
(() => {
	const momentVendorService = function momentVendorService(moment) {
		return moment;
	};

	angular
	.module("moment.vendor.service", [])
	.factory("moment$", momentVendorService);
})();