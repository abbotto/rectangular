"use strict";

import lodashVendorService from "app/extension/_/lodash.vendor.service.js";

export default angular
	.module("_.service", [])
	.factory("_", lodashVendorService)
;
