/* eslint-plugin-disable angular */
angular
	.module("service.locale", [
		"service.vendor.translate"
	])
	.factory("locale$", function LocaleService($translateProvider) {
		return $translateProvider;
	})
	.config(($translateProvider, LANGUAGE) => {
		$translateProvider.preferredLanguage(LANGUAGE);
	})
;
