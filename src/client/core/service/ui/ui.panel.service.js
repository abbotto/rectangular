/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	angular.module("ui.panel.service", []);
	
	const materialPanelService = function materialPanelService($mdPanel) {
		return $mdPanel;
	};
	
	angular.module("ui.panel.service")
	.factory("panel$", materialPanelService);
})();
