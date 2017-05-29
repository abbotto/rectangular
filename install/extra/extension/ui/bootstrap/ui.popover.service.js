"use strict";

import ngStrapVendorService from "app/extension/ui/ngStrap.vendor.js";

const bootstrapPopoverService = function bootstrapPopoverService($popover) {
	return $popover;
};

export default angular
	.module("ui.popover.service", [ngStrapVendorService.name])
	.factory("popover$", bootstrapPopoverService)
;
