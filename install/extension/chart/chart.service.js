"use strict";

import D3VendorService from "~/app/extension/chart/d3.vendor.service.js";

export default angular
	.module("chart.service", [])
	.factory("chart$", D3VendorService)
;
