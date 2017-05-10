"use strict";

(() => {
	const dataService = function dataService(immutable$) {
		return immutable$;
	};

	angular
		.module("data.service", ["immutable.extension"])
		.factory("data$", dataService)
	;
})();
