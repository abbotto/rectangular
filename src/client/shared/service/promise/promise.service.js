(() => {
	"use strict";
	
	const promiseService = function promiseService($rootScope, bluebird$) {
		const $promise = bluebird$;
		const defer = () => {
			let resolve, reject;
			const promise = new bluebird$((_resolve, _reject) => {
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
		$promise.when = bluebird$.cast;
		return $promise;
	};

	angular.module("promise.service", [
		"bluebird.extension"
	]).factory("promise$", promiseService);
})();
