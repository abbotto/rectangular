"use strict";

import angularMaterialVendorService from "app/extension/ui/angular-material.vendor.service.js";

const angularMaterialInkRippleService = function materialInkRippleService($mdInkRipple) {
	return $mdInkRipple;
};

export default angular
	.module("ui.inkRipple.service", [angularMaterialVendorService.name])
	.factory("inkRipple$", angularMaterialInkRippleService)
;
