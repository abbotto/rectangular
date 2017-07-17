"use strict";

/**
* Service - `toast$`
* - Exposes the Angular Material `mdToast` service
* - Requires `angular-material`
*
* @module Extension->UI-Toast-Service
*/

import angularMaterialVendorService from "~/app/extension/ui/angular-material.vendor.service.js";

const angularMaterialToastService = function materialToastService($mdToast) {
	return $mdToast;
};

export default angular
	.module("ui.toast.service", [angularMaterialVendorService.name])
	.factory("toast$", angularMaterialToastService)
;
