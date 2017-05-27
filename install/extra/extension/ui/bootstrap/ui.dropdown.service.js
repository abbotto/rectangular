"use strict";

import ngStrapVendorService from "app/extension/ui/ngStrap.vendor.js";

const bootstrapDropdownService = function bootstrapDropdownService($dropdown) {
	return $dropdown;
};
	
export default angular
	.module("ui.dropdown.service", [ngStrapVendorService])
	.factory("dropdown$", bootstrapDropdownService)
	.name
;
