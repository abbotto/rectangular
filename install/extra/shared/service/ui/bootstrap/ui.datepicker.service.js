"use strict";

(() => {
	const bootstrapDatepickerService = function bootstrapDatepickerService($datepicker) {
		return $datepicker;
	};
	
	angular
		.module("ui.datepicker.service", [])
		.factory("datepicker$", bootstrapDatepickerService)
	;
})();
