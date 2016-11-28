/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	angular.module("ui.icon.service", []);
	
	const materialIconService = function materialIconService($mdIcon) {
		return $mdIcon;
	};
	
	angular.module("ui.icon.service").factory("icon$", materialIconService );
})();
