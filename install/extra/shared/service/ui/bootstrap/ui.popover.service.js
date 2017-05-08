"use strict";

(() => {
	const bootstrapPopoverService = function bootstrapPopoverService($popover) {
		return $popover;
	};
	
	angular
		.module("ui.popover.service", ["ui.bootstrap.service"])
		.factory("popover$", bootstrapPopoverService)
	;
})();
