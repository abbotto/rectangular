"use strict";

/**
* Service - `tooltip$`
* - Exposes the Angular Strap `Tooltip` service
* - Requires `angular-strap`
*
* @module Extension->UI-Tooltip-Service
*/

import ngStrapVendorService from "~/app/extension/ui/ng-strap.vendor.service.js";

const bootstrapTooltipService = function bootstrapTooltipService($tooltip) {
	return $tooltip;
};

export default angular
	.module("ui.tooltip.service", [ngStrapVendorService.name])
	.factory("tooltip$", bootstrapTooltipService)
;
