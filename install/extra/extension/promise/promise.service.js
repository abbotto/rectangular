"use strict";

import BluebirdVendorService from "~/app/extension/promise/bluebird.vendor.service.js";

export default angular
	.module("promise.service", [])
	.factory("promise$", BluebirdVendorService)
	.run(($rootScope, promise$) => {
		promise$.setScheduler((cb) => {
			$rootScope.$evalAsync(cb);
		});
	})
;
