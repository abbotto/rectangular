angular
	.module("service.vendor.lodash", [])
		.factory("Lodash$", function LodashService($window) {
			return $window._;
		}
	)
;
