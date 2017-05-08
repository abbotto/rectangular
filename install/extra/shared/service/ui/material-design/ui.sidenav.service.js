"use strict";

(() => {
	const materialSidenavService = function materialSidenavService($mdSidenav) {
		return $mdSidenav;
	};
	
	angular
		.module("ui.sidenav.service", ["ui.material.service"])
		.factory("sidenav$", materialSidenavService)
	;
})();
