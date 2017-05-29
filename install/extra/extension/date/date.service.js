"use strict";

import momentVendorService from "app/extension/date/moment.vendor.service.js";

export default angular
	.module("date.service", [])
	.factory("date$", momentVendorService)
;
