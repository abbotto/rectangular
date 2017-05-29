"use strict";

import ngStrapVendorService from "app/extension/ui/ngStrap.vendor.js";

const bootstrapDatepickerService = function bootstrapDatepickerService($datepicker) {
	return $datepicker;
};

export default angular
	.module("ui.datepicker.service", [ngStrapVendorService.name])
	.factory("datepicker$", bootstrapDatepickerService)
;
