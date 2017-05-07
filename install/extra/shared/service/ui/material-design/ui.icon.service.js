"use strict";

(() => {
	const materialIconService = function materialIconService($mdIcon) {
		return $mdIcon;
	};
	
	angular
		.module("ui.icon.service", [])
		.factory("icon$", materialIconService)
	;
})();
