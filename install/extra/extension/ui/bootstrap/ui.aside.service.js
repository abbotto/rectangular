"use strict";

import ngStrapVendorService from "~/app/extension/ui/ng-strap.vendor.service.js";

const bootstrapAsideService = function bootstrapAsideService($aside) {
	return $aside;
};

export default angular
	.module("ui.aside.service", [ngStrapVendorService.name])
	.factory("aside$", bootstrapAsideService)
;
