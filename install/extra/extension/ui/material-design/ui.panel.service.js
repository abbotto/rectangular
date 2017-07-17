"use strict";

/**
* Service - `panel$`
* - Exposes the Angular Material `mdPanel` service
* - Requires `angular-material`
*
* @module Extension->UI-Panel-Service
*/

import angularMaterialVendorService from "~/app/extension/ui/angular-material.vendor.service.js";

const angularMaterialPanelService = function materialPanelService($mdPanel) {
	return $mdPanel;
};

export default angular
	.module("ui.panel.service", [angularMaterialVendorService.name])
	.factory("panel$", angularMaterialPanelService)
;
