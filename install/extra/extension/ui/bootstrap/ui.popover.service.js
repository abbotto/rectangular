"use strict";

/**
* Service - `popover$`
* - Exposes the Angular Strap `Popover` service
* - Requires `angular-strap`
*
* @module Extension->Popover-Service
*/

import ngStrapVendorService from "~/app/extension/ui/ng-strap.vendor.service.js";

const bootstrapPopoverService = function bootstrapPopoverService($popover) {
	return $popover;
};

export default angular
	.module("ui.popover.service", [ngStrapVendorService.name])
	.factory("popover$", bootstrapPopoverService)
;
