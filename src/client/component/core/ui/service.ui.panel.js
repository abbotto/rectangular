/* eslint-plugin-disable angular */
angular
	.module("service.ui.panel", [])
		.factory("panel$", function materialPanelService($mdPanel) {
			return $mdPanel;
		}
	)
;
