angular
	.module("service.ui.icon", [])
		.factory("icon$", function materialIconService($mdIcon) {
			return $mdIcon;
		}
	)
;
