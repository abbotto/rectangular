"use strict";

import angularMaterialVendorService from "app/extension/ui/angular-material.vendor.service.js";

const angularMaterialPanelService = function materialPanelService($mdPanel) {
	return $mdPanel;
};

export default angular
	.module("ui.panel.service", [angularMaterialVendorService])
	.factory("panel$", materialPanelService)
	.name
;
