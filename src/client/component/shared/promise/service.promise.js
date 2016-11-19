angular
	.module("service.promise", [
		"service.vendor.bluebird"
	])
	.factory("Promise$", function PromiseService($rootScope, Bluebird$) {
		const $promise = Bluebird$;
		const defer = () => {
			let resolve, reject;
			const promise = new Bluebird$((_resolve, _reject) => {
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
		$promise.when = Bluebird$.cast;
		return $promise;
	})
	.run(($rootScope, Bluebird$) => {
		Bluebird$.setScheduler(cb => {
			$rootScope.$evalAsync(cb);
		});
	})
;
