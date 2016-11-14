angular
	.module("service.material.colors", [])
		.factory("Colors", function ServiceMaterialColors($mdColors) {
			return $mdColors;
		}
	)
;
