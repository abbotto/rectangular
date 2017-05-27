"use strict";

import angularMaterialVendorService from "app/extension/ui/angular-material.vendor.service.js";

const angularMaterialToastService = function materialToastService($mdToast) {
	return $mdToast;
};

export default angular
	.module("ui.toast.service", [angularMaterialVendorService])
	.factory("toast$", materialToastService)
	.name
;
