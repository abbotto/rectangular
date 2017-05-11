"use strict";

(() => {
	const angularTranslateVendorService = function angularTranslateVendorService($translate) {
		return $translate;
	};
	
	angular
		.module("angularTranslate.vendor.service", [
			"app.constant",
			"pascalprecht.translate"
		])
		.factory("locale$", angularTranslateVendorService)
		.config(($translateProvider, LANGUAGE) => {
			$translateProvider.preferredLanguage(LANGUAGE);
		})
	;
})();
