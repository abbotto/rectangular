angular
	.module("service.ui.sidenav", [])
		.factory("Sidenav$", function MaterialSidenavService($mdSidenav) {
			return $mdSidenav;
		}
	)
;
