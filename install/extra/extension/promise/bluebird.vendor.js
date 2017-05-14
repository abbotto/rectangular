"use strict";

import Promise from "bluebird";

(() => {
	const bluebirdVendorService = function bluebirdVendorService($rootScope) {
		const $promise = Promise;
		
		const defer = () => {
			let reject, resolve;
			
			// eslint-disable-next-line new-cap
			const promise = new $promise((_resolve, _reject) => {
				resolve = _resolve;
				reject = _reject;
			});

			return {
				resolve,
				reject,
				promise
			};
		};
		
		$promise.defer = defer;
		$promise.when = $promise.cast;
		
		return $promise;
	};

	angular
		.module("bluebird.vendor.service", [])
		.factory("promise$", bluebirdVendorService)
		.run(($rootScope, promise$) => {
			promise$.setScheduler((cb) => {
				$rootScope.$evalAsync(cb);
			});
		})
	;
})();
