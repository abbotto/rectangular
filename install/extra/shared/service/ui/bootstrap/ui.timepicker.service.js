"use strict";

(() => {
	const bootstrapTimepickerService = function bootstrapTimepickerService($timepicker) {
		return $timepicker;
	};
	
	angular
		.module("ui.timepicker.service", [])
		.factory("timepicker$", bootstrapTimepickerService)
	;
})();
