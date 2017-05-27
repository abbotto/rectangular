"use strict";

import ngStrapVendorService from "app/extension/ui/ngStrap.vendor.js";

const bootstrapTooltipService = function bootstrapTooltipService($tooltip) {
	return $tooltip;
};

export default angular
	.module("ui.tooltip.service", [ngStrapVendorService])
	.factory("tooltip$", bootstrapTooltipService)
	.name
;
