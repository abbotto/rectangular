"use strict";

(() => {
	const localeService = function localeService(angularTranslate$) {
		return angularTranslate$;
	};
	
	angular
		.module("locale.service", ["angularTranslate.extension"])
		.factory("locale$", localeService)
	;
})();
