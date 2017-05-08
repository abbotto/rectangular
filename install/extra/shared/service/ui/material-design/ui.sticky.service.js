"use strict";

(() => {
	const materialStickyService = function materialStickyService($mdSticky) {
		return $mdSticky;
	};
	
	angular
		.module("ui.sticky.service", ["ui.material.service"])
		.factory("sticky$", materialStickyService)
	;
})();
