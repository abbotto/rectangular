"use strict";

import ngStrapVendorService from "app/extension/ui/ng-strap.vendor.service.js";

const bootstrapDropdownService = function bootstrapDropdownService($dropdown) {
	return $dropdown;
};
	
export default angular
	.module("ui.dropdown.service", [ngStrapVendorService.name])
	.factory("dropdown$", bootstrapDropdownService)
;
