angular
	.module("service.ui.colors", [])
		.factory("Colors$", function MaterialColorsService($mdColors) {
			return $mdColors;
		}
	)
;
