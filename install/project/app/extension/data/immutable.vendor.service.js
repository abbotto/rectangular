"use strict";

import Immutable from "immutable";

const immutableVendorService = function immutableVendorService() {
	return Immutable;
};

export default angular
	.module("immutable.vendor.service", [])
	.factory("data$", immutableVendorService)
	.name
;
