"use strict";

(() => {
	angular.module("angularTranslate.extension", [
		"pascalprecht.translate"
	])
	.config(($translateProvider, LANGUAGE) => {
		$translateProvider.preferredLanguage(LANGUAGE);
	});
})();
