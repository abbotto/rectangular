"use strict";

import ngStrapVendorService from "app/extension/ui/ngStrap.vendor.js";

const bootstrapTimepickerService = function bootstrapTimepickerService($timepicker) {
	return $timepicker;
};

export default angular
	.module("ui.timepicker.service", [ngStrapVendorService.name])
	.factory("timepicker$", bootstrapTimepickerService)
;
