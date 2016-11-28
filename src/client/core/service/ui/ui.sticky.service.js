/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	angular.module("ui.sticky.service", []);
	
	const materialStickyService = function materialStickyService($mdSticky) {
		return $mdSticky;
	};
	
	angular.module("ui.sticky.service")
	.factory("sticky$", materialStickyService);
})();
