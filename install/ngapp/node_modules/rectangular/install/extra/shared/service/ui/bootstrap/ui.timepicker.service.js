(() => {
	"use strict";
	
	const bootstrapTimepickerService = function bootstrapTimepickerService($aside) {
		return $aside;
	};
	
	angular.module("ui.timepicker.service", []).factory("timepicker$", bootstrapTimepickerService);
})();
