"use strict";

(() => {
	const bootstrapAlertService = function bootstrapAlertService($alert) {
		return $alert;
	};
	
	angular
		.module("ui.alert.service", ["ui.bootstrap.service"])
		.factory("alert$", bootstrapAlertService)
	;
})();
