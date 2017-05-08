"use strict";

(() => {
	const localeService = function localeService($translate) {
		return $translate;
	};
	
	angular
		.module("locale.service", ["pascalprecht.translate"])
		.config(($translateProvider, LANGUAGE) => {
			$translateProvider.preferredLanguage(LANGUAGE);
		})
		.factory("locale$", localeService)
	;
})();
