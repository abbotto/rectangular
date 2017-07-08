"use strict";

import LodashVendorService from "~/app/extension/_/lodash.vendor.service.js";

export default angular
	.module("_.service", [])
	.factory("_", LodashVendorService)
;
