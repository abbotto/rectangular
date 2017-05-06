(() => {
	"use strict";
	
	const bootstrapTooltipService = function bootstrapTooltipService($tooltip) {
		return $tooltip;
	};
	
	angular.module("ui.tooltip.service", []).factory("tooltip$", bootstrapTooltipService);
})();
