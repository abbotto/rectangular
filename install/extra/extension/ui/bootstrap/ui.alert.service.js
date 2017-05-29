"use strict";

import ngStrapVendorService from "app/extension/ui/ngStrap.vendor.js";

const bootstrapAlertService = function bootstrapAlertService($alert) {
	return $alert;
};

export default angular
	.module("ui.alert.service", [ngStrapVendorService.name])
	.factory("alert$", bootstrapAlertService)
;
