angular
	.module("service.vendor.bluebird", [])
		.factory("Bluebird$", function BluebirdService($window) {
			return $window.Promise;
		}
	)
;
