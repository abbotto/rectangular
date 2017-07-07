"use strict";

import angularMaterialVendorService from "app/extension/ui/angular-material.vendor.service.js";

const angularMaterialDialogService = function materialDialogService($mdDialog) {
	return $mdDialog;
};

export default angular
	.module("ui.dialog.service", [angularMaterialVendorService.name])
	.factory("dialog$", angularMaterialDialogService)
;
