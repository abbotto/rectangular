"use strict";

(() => {
	const localeService = function localeService($translateProvider) {
		return $translateProvider;
	};
	
	angular
		.module("locale.service", ["angularTranslate.extension"])
		.factory("locale$", localeService)
	;
})();
