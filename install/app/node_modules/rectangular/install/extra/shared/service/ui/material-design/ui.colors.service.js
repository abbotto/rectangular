(() => {
	"use strict";
	
	const materialColorsService = function materialColorsService($mdColors) {
		return $mdColors;
	};
	
	angular.module("ui.colors.service", []).factory("colors$", materialColorsService);
})();
