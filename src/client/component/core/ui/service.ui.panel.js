angular
	.module("service.ui.panel", [])
		.factory("Panel$", function MaterialPanelService($mdPanel) {
			return $mdPanel;
		}
	)
;
