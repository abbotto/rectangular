"use strict";

(() => {
	angular.module("angularTranslate.extension", [
		"app.constant",
		"pascalprecht.translate"
	])
	.config(($translateProvider, LANGUAGE) => {
		$translateProvider.preferredLanguage(LANGUAGE);
	});
})();
