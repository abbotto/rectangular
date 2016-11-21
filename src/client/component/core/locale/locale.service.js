/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	const localeService = function localeService($translateProvider) {
		return $translateProvider;
	};
	
	angular
	.module("locale.service", [
		"translate.extension"
	])
	.factory("locale$", localeService)
	.config(($translateProvider, LANGUAGE) => {
		$translateProvider.preferredLanguage(LANGUAGE);
	});
})();