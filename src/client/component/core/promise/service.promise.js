/* eslint-plugin-disable angular */
angular
	.module("service.promise", [
		"service.vendor.bluebird"
	])
	.factory("promise$", function promiseService($rootScope, bluebird$) {
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
	})
	.run(($rootScope, bluebird$) => {
		bluebird$.setScheduler(cb => {
			$rootScope.$evalAsync(cb);
		});
	})
;
