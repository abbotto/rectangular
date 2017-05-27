"use strict";

import angularMaterialVendorService from "app/extension/ui/angular-material.vendor.service.js"

const angularMaterialBottomSheetService = function materialBottomSheetService($mdBottomSheet) {
	return $mdBottomSheet;
};

export default angular
	.module("ui.bottomSheet.service", [angularMaterialVendorService])
	.factory("bottomSheet$", materialBottomSheetService)
	.name
;
