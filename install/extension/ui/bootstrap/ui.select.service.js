"use strict";

/**
* SERVICE - `select$`
* - Exposes the Angular Strap `Select` service
* - Requires `angular-strap`
*
* @module Extension->UI-Select-Service
*/

import ngStrapVendorService from "~/app/extension/ui/ng-strap.vendor.service.js";

const bootstrapSelectService = function bootstrapSelectService($select) {
	return $select;
};

export default angular
	.module("ui.select.service", [ngStrapVendorService.name])
	.factory("select$", bootstrapSelectService)
;
