"use strict";

import ngStrapVendorService from "app/extension/ui/ng-strap.vendor.service.js";

const bootstrapScrollspyService = function bootstrapScrollspyService($scrollspy) {
	return $scrollspy;
};

export default angular
	.module("ui.scrollspy.service", [ngStrapVendorService.name])
	.factory("scrollspy$", bootstrapScrollspyService)
;
