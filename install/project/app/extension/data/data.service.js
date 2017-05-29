"use strict";

import immutableVendorService from "app/extension/data/immutable.vendor.service.js";

export default angular
	.module("data.service", [])
	.factory("data$", immutableVendorService)
;
