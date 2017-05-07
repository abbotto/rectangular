"use strict";

(() => {
	const dateService = function dateService(moment$) {
		return moment$;
	};
	
	angular
		.module("date.service", ["moment.extension"])
		.factory("date$", dateService)
	;
})();
