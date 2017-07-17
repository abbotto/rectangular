"use strict";

/**
* Service - `scrollspy$`
* - Exposes the Angular Strap `Scrollspy` service
* - Requires `angular-strap`
*
* @module Extension->UI-Scrollspy-Service
*/

import ngStrapVendorService from "~/app/extension/ui/ng-strap.vendor.service.js";

const bootstrapScrollspyService = function bootstrapScrollspyService($scrollspy) {
	return $scrollspy;
};

export default angular
	.module("ui.scrollspy.service", [ngStrapVendorService.name])
	.factory("scrollspy$", bootstrapScrollspyService)
;
