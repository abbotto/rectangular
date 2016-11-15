angular
	.module("service.ui.sidenav", [])
		.factory("Sidenav", function ServiceMaterialSidenav($mdSidenav) {
			return $mdSidenav;
		}
	)
;
