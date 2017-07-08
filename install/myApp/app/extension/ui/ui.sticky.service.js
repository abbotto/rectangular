"use strict";

import angularMaterialVendorService from "~/app/extension/ui/angular-material.vendor.service.js";

const angularMaterialStickyService = function materialStickyService($mdSticky) {
	return $mdSticky;
};

export default angular
	.module("ui.sticky.service", [angularMaterialVendorService.name])
	.factory("sticky$", angularMaterialStickyService)
;
