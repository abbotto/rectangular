/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	const materialSidenavService = function materialSidenavService($mdSidenav) {
		return $mdSidenav;
	};

	angular
	.module("ui.sidenav.service", [])
	.factory("sidenav$", materialSidenavService);
})();
