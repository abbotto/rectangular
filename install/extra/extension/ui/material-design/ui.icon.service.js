"use strict";

import angularMaterialVendorService from "app/extension/ui/angular-material.vendor.service.js";

const angularMaterialIconService = function materialIconService($mdIcon) {
	return $mdIcon;
};

export default angular
	.module("ui.icon.service", [angularMaterialVendorService.name])
	.factory("icon$", angularMaterialIconService)
;
