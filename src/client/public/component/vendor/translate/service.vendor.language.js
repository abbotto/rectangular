angular
	.module("service.vendor.language", [
		"pascalprecht.translate"
	])
	.factory("Language", function ServiceLanguage($translateProvider) {
		return $translateProvider;
	})
	.config(($translateProvider, LANGUAGE) => {
		$translateProvider.preferredLanguage(LANGUAGE);
	})
;
