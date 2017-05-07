"use strict";

(() => {
	const materialPanelService = function materialPanelService($mdPanel) {
		return $mdPanel;
	};
	
	angular
		.module("ui.panel.service", [])
		.factory("panel$", materialPanelService)
	;
})();
