/* eslint-plugin-disable angular */
angular
	.module("service.vendor.lodash", [])
		.factory("lodash$", function lodashService($window) {
			return $window._;
		}
	)
;
