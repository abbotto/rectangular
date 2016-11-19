angular
	.module("service.ui.sticky", [])
		.factory("sticky$", function materialStickyService($mdSticky) {
			return $mdSticky;
		}
	)
;
