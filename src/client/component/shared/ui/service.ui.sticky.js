angular
	.module("service.ui.sticky", [])
		.factory("Sticky$", function MaterialStickyService($mdSticky) {
			return $mdSticky;
		}
	)
;
