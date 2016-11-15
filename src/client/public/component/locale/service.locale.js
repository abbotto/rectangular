angular
	.module("service.locale", [
		"service.vendor.translate"
	])
	.factory("Language", function ServiceLanguage($translateProvider) {
		return $translateProvider;
	})
	.config(($translateProvider, LANGUAGE) => {
		$translateProvider.preferredLanguage(LANGUAGE);
	})
;
