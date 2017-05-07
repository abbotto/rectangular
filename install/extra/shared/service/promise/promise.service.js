"use strict";

(() => {
	const promiseService = function promiseService($rootScope, bluebird$) {
		const $promise = bluebird$;
		const defer = () => {
			let resolve;
			let reject;
			// eslint-disable-next-line new-cap
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

	angular
		.module("promise.service", ["bluebird.extension"])
		.factory("promise$", promiseService)
	;
})();
