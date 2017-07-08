"use strict";

import ngStrapVendorService from "~/app/extension/ui/ng-strap.vendor.service.js";

const bootstrapAffixService = function bootstrapAffixService($affix) {
	return $affix;
};

export default angular
	.module("ui.affix.service", [ngStrapVendorService.name])
	.factory("affix$", bootstrapAffixService)
;
