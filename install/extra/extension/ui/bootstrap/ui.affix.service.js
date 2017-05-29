"use strict";

import ngStrapVendorService from "app/extension/ui/ngStrap.vendor.js";

const bootstrapAffixService = function bootstrapAffixService($affix) {
	return $affix;
};

export default angular
	.module("ui.affix.service", [ngStrapVendorService.name])
	.factory("affix$", bootstrapAffixService)
;
