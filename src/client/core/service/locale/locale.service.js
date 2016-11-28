/* eslint-plugin-disable angular */
(() => {
	"use strict";

	angular
	.module("locale.service", [
		"translate.extension"
	]);

	const localeService = function localeService($translateProvider) {
		return $translateProvider;
	};
	
	angular.module("locale.service")
	.factory("locale$", localeService)
	.config(($translateProvider, LANGUAGE) => {
		$translateProvider.preferredLanguage(LANGUAGE);
	});
})();