/* eslint-plugin-disable angular */
angular
	.module("service.ui.sidenav", [])
		.factory("sidenav$", function materialSidenavService($mdSidenav) {
			return $mdSidenav;
		}
	)
;
