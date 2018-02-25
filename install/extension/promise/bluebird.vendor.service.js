"use strict";

/**
* Service - `promise$`
* - A service for JavaScript Promises
* - Requires `bluebird`
*
* @module Extension->Promise-Service
*/

import Promise from "bluebird";

export default function bluebirdVendorService($rootScope) {
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
