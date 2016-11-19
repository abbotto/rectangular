/* eslint-plugin-disable angular */
angular
	.module("service.vendor.bluebird", [])
		.factory("bluebird$", function bluebirdService($window) {
			return $window.Promise;
		}
	)
;
