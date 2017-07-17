"use strict";

/**
* Service - `sidenav$`
* - Exposes the Angular Material `mdSidenav` service
* - Requires `angular-material`
*
* @module Extension->Sidenav-Service
*/

import angularMaterialVendorService from "~/app/extension/ui/angular-material.vendor.service.js";

const angularMaterialSidenavService = function materialSidenavService($mdSidenav) {
	return $mdSidenav;
};

export default angular
	.module("ui.sidenav.service", [angularMaterialVendorService.name])
	.factory("sidenav$", angularMaterialSidenavService)
;
