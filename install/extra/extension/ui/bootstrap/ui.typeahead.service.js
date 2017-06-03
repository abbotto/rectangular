"use strict";

import ngStrapVendorService from "app/extension/ui/ng-strap.vendor.service.js";

const bootstrapTypeaheadService = function bootstrapTypeaheadService($typeahead) {
	return $typeahead;
};

export default angular
	.module("ui.typeahead.service", [ngStrapVendorService.name])
	.factory("typeahead$", bootstrapTypeaheadService)
;