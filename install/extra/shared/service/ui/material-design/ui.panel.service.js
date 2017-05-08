"use strict";

(() => {
	const materialPanelService = function materialPanelService($mdPanel) {
		return $mdPanel;
	};
	
	angular
		.module("ui.panel.service", ["ui.material.service"])
		.factory("panel$", materialPanelService)
	;
})();
