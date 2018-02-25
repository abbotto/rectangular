"use strict";

/**
* Service - `locale$`
* - A service for translating text
* - Requires `angular-translate`
*
* @module Extension->Locale-Service
*/

import AngularTranslateVendorService from "~/app/extension/locale/angular-translate.vendor.service.js";

export default angular
	.module("locale.service", ["pascalprecht.translate"])
	.factory("locale$", AngularTranslateVendorService)
	.config(($translateProvider, LANGUAGE) => {
		$translateProvider.preferredLanguage(LANGUAGE);
	})
;
