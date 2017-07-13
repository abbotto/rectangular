"use strict";

import angularMaterialVendorService from "~/app/extension/ui/angular-material.vendor.service.js";

const angularMaterialMediaService = function materialMediaService($mdMedia) {
	return $mdMedia;
};

export default angular
	.module("ui.media.service", [angularMaterialVendorService.name])
	.factory("media$", angularMaterialMediaService)
;
