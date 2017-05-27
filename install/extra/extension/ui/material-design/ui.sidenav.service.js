"use strict";

import angularMaterialVendorService from "app/extension/ui/angular-material.vendor.service.js"

const angularMaterialSidenavService = function materialSidenavService($mdSidenav) {
	return $mdSidenav;
};

export default angular
	.module("ui.sidenav.service", [angularMaterialVendorService])
	.factory("sidenav$", materialSidenavService)
	.name
;
