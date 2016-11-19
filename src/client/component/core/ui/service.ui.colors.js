/* eslint-plugin-disable angular */
angular
	.module("service.ui.colors", [])
		.factory("colors$", function materialColorsService($mdColors) {
			return $mdColors;
		}
	)
;
