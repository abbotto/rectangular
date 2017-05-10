"use strict";

(() => {
	const printService = function printService(teleprint$) {
		return teleprint$;
	};

	angular
		.module("print.service", ["teleprint.extension"])
		.factory("print$", printService)
	;
})();
