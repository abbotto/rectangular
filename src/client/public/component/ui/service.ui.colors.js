angular
	.module("service.ui.colors", [])
		.factory("Colors", function ServiceMaterialColors($mdColors) {
			return $mdColors;
		}
	)
;
