angular
	.module("service.ui.colors", [])
		.factory("colors$", function materialColorsService($mdColors) {
			return $mdColors;
		}
	)
;
