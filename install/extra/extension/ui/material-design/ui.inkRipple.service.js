"use strict";

/**
* SERVICE - `inkRipple$`
* - Exposes the Angular Material `mdInkRipple` service
* - Requires `angular-material`
*
* @module Extension->UI-InkRipple-Service
*/

import angularMaterialVendorService from "~/app/extension/ui/angular-material.vendor.service.js";

const angularMaterialInkRippleService = function materialInkRippleService($mdInkRipple) {
	return $mdInkRipple;
};

export default angular
	.module("ui.inkRipple.service", [angularMaterialVendorService.name])
	.factory("inkRipple$", angularMaterialInkRippleService)
;
