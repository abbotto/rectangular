"use strict";

/**
* SERVICE - `bottomSheet$`
* - Exposes the Angular Material `BottomSheet` service
* - Requires `angular-material`
*
* @module Extension->UI-BottomSheet-Service
*/

import angularMaterialVendorService from "~/app/extension/ui/angular-material.vendor.service.js";

const angularMaterialBottomSheetService = function materialBottomSheetService($mdBottomSheet) {
	return $mdBottomSheet;
};

export default angular
	.module("ui.bottomSheet.service", [angularMaterialVendorService.name])
	.factory("bottomSheet$", angularMaterialBottomSheetService)
;
