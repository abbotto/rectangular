angular
	.module("service.ui.panel", [])
		.factory("panel$", function materialPanelService($mdPanel) {
			return $mdPanel;
		}
	)
;
