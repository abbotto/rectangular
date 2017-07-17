"use strict";

/**
* Service - `timepicker$`
* - Exposes the Angular Strap `Timepicker` service
* - Requires `angular-strap`
*
* @module Extension->Timepicker-Service
*/

import ngStrapVendorService from "~/app/extension/ui/ng-strap.vendor.service.js";

const bootstrapTimepickerService = function bootstrapTimepickerService($timepicker) {
	return $timepicker;
};

export default angular
	.module("ui.timepicker.service", [ngStrapVendorService.name])
	.factory("timepicker$", bootstrapTimepickerService)
;
