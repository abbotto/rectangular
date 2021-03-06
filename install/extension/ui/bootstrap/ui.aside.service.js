"use strict";

/**
* SERVICE - `aside$`
* - Exposes the Angular Strap `Aside` service
* - Requires `angular-strap`
*
* @module Extension->UI-Aside-Service
*/

import ngStrapVendorService from "~/app/extension/ui/ng-strap.vendor.service.js";

const bootstrapAsideService = function bootstrapAsideService($aside) {
	return $aside;
};

export default angular
	.module("ui.aside.service", [ngStrapVendorService.name])
	.factory("aside$", bootstrapAsideService)
;
