angular
	.module("service.vendor.lodash", [])
		.factory("_", function Service_($window) {
			return $window._;
		}
	)
;
