"use strict";

(() => {
	const bootstrapTooltipService = function bootstrapTooltipService($tooltip) {
		return $tooltip;
	};
	
	angular
		.module("ui.tooltip.service", ["ui.bootstrap.service"])
		.factory("tooltip$", bootstrapTooltipService)
	;
})();
