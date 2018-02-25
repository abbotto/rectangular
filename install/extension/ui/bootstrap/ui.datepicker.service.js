"use strict";

/**
* SERVICE - `datepicker$`
* - Exposes the Angular Strap `Datepicker` service
* - Requires `angular-strap`
*
* @module Extension->UI-Datepicker-Service
*/

import ngStrapVendorService from "~/app/extension/ui/ng-strap.vendor.service.js";

const bootstrapDatepickerService = function bootstrapDatepickerService($datepicker) {
	return $datepicker;
};

export default angular
	.module("ui.datepicker.service", [ngStrapVendorService.name])
	.factory("datepicker$", bootstrapDatepickerService)
;
