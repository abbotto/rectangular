"use strict";

/**
* SERVICE - `alert$`
* - Exposes the Angular Strap `Alert` service
* - Requires `angular-strap`
*
* @module Extension->UI-Alert-Service
*/

import ngStrapVendorService from "~/app/extension/ui/ng-strap.vendor.service.js";

const bootstrapAlertService = function bootstrapAlertService($alert) {
	return $alert;
};

export default angular
	.module("ui.alert.service", [ngStrapVendorService.name])
	.factory("alert$", bootstrapAlertService)
;
