"use strict";

import angularMaterialVendorService from "app/extension/ui/angular-material.vendor.service.js"

const angularMaterialColorsService = function materialColorsService($mdColors) {
	return $mdColors;
};

export default angular
	.module("ui.colors.service", [angularMaterialVendorService])
	.factory("colors$", materialColorsService)
	.name
;
