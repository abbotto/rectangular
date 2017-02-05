"use strict";

(() => {
	const bluebirdVendorService = function bluebirdVendorService($window) {
		return $window.Promise;
	};
	
	angular
		.module("bluebird.extension", [])
		.factory("bluebird$", bluebirdVendorService)
		.run(($rootScope, bluebird$) => {
			bluebird$.setScheduler((cb) => {
				$rootScope.$evalAsync(cb);
			})
		;
	});
})();
