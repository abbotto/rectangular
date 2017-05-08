"use strict";

(() => {
	angular.module("angularTranslate.extension", [
		"pascalprecht.translate"
	])
	.config(($translateProvider) => {
		$translateProvider.preferredLanguage("en");
	});
})();
