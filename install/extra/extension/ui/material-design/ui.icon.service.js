"use strict";

(() => {
	const materialIconService = function materialIconService($mdIcon) {
		return $mdIcon;
	};
	
	angular
		.module("ui.icon.service", ["ui.material.service"])
		.factory("icon$", materialIconService)
	;
})();
