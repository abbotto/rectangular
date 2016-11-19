angular
	.module("service.locale", [
		"service.vendor.translate"
	])
	.factory("Locale$", function LocaleService($translateProvider) {
		return $translateProvider;
	})
	.config(($translateProvider, LANGUAGE) => {
		$translateProvider.preferredLanguage(LANGUAGE);
	})
;
