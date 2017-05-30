"use strict";

import TeleprintVendorService from "teleprint";

export default angular
	.module("print.service", [])
	.factory("print$", TeleprintVendorService)
;
