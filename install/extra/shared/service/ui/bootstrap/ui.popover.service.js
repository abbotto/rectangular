"use strict";

(() => {
	const bootstrapPopoverService = function bootstrapPopoverService($popover) {
		return $popover;
	};
	
	angular
		.module("ui.popover.service", [])
		.factory("popover$", bootstrapPopoverService)
	;
})();
