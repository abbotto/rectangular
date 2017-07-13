"use strict";

import ngStrapVendorService from "~/app/extension/ui/ng-strap.vendor.service.js";

const bootstrapTooltipService = function bootstrapTooltipService($tooltip) {
	return $tooltip;
};

export default angular
	.module("ui.tooltip.service", [ngStrapVendorService.name])
	.factory("tooltip$", bootstrapTooltipService)
;
