/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	angular.module("ui.sidenav.service", []);
	
	const materialSidenavService = function materialSidenavService($mdSidenav) {
		return $mdSidenav;
	};

	angular.module("ui.sidenav.service")
	.factory("sidenav$", materialSidenavService);
})();
