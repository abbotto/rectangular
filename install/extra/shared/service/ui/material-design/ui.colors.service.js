"use strict";

(() => {
	const materialColorsService = function materialColorsService($mdColors) {
		return $mdColors;
	};
	
	angular
		.module("ui.colors.service", ["ui.material.service"])
		.factory("colors$", materialColorsService)
	;
})();
