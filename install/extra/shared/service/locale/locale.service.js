"use strict";

(() => {
	const localeService = function localeService($translate) {
		return $translate;
	};
	
	angular
		.module("locale.service", ["angularTranslate.extension"])
		.factory("locale$", localeService)
	;
})();
