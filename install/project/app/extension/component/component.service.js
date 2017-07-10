
"use strict";

import reactVendorService from "~/app/extension/component/react.vendor.service.js";

export default angular
	.module("component.service", [])
	.factory("component$", reactVendorService)
;
