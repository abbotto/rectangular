"use strict";

(() => {
	angular.module("translate.extension", [
		"pascalprecht.translate"
	])
	.config(($translateProvider, LANGUAGE) => {
		$translateProvider.preferredLanguage(LANGUAGE);
	});
})();
