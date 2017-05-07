"use strict";

(() => {
	const angularTranslateService = function angularTranslateService($translate) {
		return $translate;
	};
	
	angular
		.module("angularTranslate.extension", [
			"pascalprecht.translate"
		])
		.config(($translateProvider, LANGUAGE) => {
			$translateProvider.preferredLanguage(LANGUAGE);
		})
		.factory("angularTranslate$", angularTranslateService)
	;
})();
