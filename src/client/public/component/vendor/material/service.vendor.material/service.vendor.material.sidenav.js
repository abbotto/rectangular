angular
	.module("service.material.sidenav", [])
		.factory("Sidenav", function ServiceMaterialSidenav($mdSidenav) {
			return $mdSidenav;
		}
	)
;
