"use strict";

(() => {
	const printService = function _Service(teleprint$) {
		return teleprint$;
	};

	angular
		.module("print.service", ["teleprint.extension"])
		.factory("print$", printService)
	;
})();
