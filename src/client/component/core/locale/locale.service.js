/* eslint-plugin-disable angular */
(() => {
	const localeService = function localeService($translateProvider) {
		return $translateProvider;
	};
	
	angular
	.module("locale.service", [
		"translate.vendor.service"
	])
	.factory("locale$", localeService)
	.config(($translateProvider, LANGUAGE) => {
		$translateProvider.preferredLanguage(LANGUAGE);
	});
})();