"use strict";

(() => {
	const localeService = function localeService($translate) {
		return $translate;
	};
	
	angular
		.module("locale.service", ["pascalprecht.translate"])
		.config(($translateProvider) => {
			$translateProvider.preferredLanguage("en");
		})
		.factory("locale$", localeService)
	;
})();
