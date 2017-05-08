"use strict";

(() => {
	const materialInkRippleService = function materialInkRippleService($mdInkRipple) {
		return $mdInkRipple;
	};
	
	angular
		.module("ui.inkRipple.service", ["ui.material.service"])
		.factory("inkRipple$", materialInkRippleService)
	;
})();
