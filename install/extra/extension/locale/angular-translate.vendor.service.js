"use strict";

const angularTranslateVendorService = function angularTranslateVendorService($translate) {
	return $translate;
};

export default angular
	.module("angularTranslate.vendor.service", [
		"pascalprecht.translate"
	])
	.factory("locale$", angularTranslateVendorService)
	.config(($translateProvider, LANGUAGE) => {
		$translateProvider.preferredLanguage(LANGUAGE);
	})
	.name
;
