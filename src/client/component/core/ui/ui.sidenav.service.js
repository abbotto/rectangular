/* eslint-plugin-disable angular */
(() => {
	const materialSidenavService = function materialSidenavService($mdSidenav) {
		return $mdSidenav;
	};

	angular
	.module("ui.sidenav.service", [])
	.factory("sidenav$", materialSidenavService);
})();
