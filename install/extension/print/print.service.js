"use strict";

import TeleprintVendorService from "~/app/extension/print/teleprint.vendor.service.js";

export default angular
	.module("print.service", [])
	.factory("print$", TeleprintVendorService)
;
