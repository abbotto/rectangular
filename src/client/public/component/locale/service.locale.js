angular
	.module("service.locale", [
		"service.vendor.translate"
	])
	.factory("Language$", function LanguageService($translateProvider) {
		return $translateProvider;
	})
	.config(($translateProvider, LANGUAGE) => {
		$translateProvider.preferredLanguage(LANGUAGE);
	})
;
