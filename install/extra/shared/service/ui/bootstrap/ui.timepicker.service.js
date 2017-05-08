"use strict";

(() => {
	const bootstrapTimepickerService = function bootstrapTimepickerService($timepicker) {
		return $timepicker;
	};
	
	angular
		.module("ui.timepicker.service", ["ui.bootstrap.service"])
		.factory("timepicker$", bootstrapTimepickerService)
	;
})();
