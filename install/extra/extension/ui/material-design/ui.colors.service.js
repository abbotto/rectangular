"use strict";

/**
* Service - `Colors$`
* - Exposes the Angular Material `MDColors` service
* - Requires `angular-material`
*
* @module Extension->Colors-Service
*/

import angularMaterialVendorService from "~/app/extension/ui/angular-material.vendor.service.js";

const angularMaterialColorsService = function materialColorsService($mdColors) {
	return $mdColors;
};

export default angular
	.module("ui.colors.service", [angularMaterialVendorService.name])
	.factory("colors$", angularMaterialColorsService)
;
