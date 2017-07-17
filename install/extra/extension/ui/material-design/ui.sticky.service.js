"use strict";

/**
* SERVICE - `sticky$`
* - Exposes the Angular Material `mdSticky` service
* - Requires `angular-material`
*
* @module Extension->UI-Sticky-Service
*/

import angularMaterialVendorService from "~/app/extension/ui/angular-material.vendor.service.js";

const angularMaterialStickyService = function materialStickyService($mdSticky) {
	return $mdSticky;
};

export default angular
	.module("ui.sticky.service", [angularMaterialVendorService.name])
	.factory("sticky$", angularMaterialStickyService)
;
