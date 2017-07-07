"use strict";

import AngularTranslateVendorService from "app/extension/locale/angular-translate.vendor.service.js";

export default angular
	.module("locale.service", ["pascalprecht.translate"])
	.factory("locale$", AngularTranslateVendorService)
	.config(($translateProvider, LANGUAGE) => {
		$translateProvider.preferredLanguage(LANGUAGE);
	})
;
