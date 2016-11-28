/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	angular.module("ui.inkRipple.service", []);
	
	const materialInkRippleService = function materialInkRippleService($mdInkRipple) {
		return $mdInkRipple;
	};
	
	angular.module("ui.inkRipple.service")
	.factory("inkRipple$", materialInkRippleService);
})();
