"use strict";

import ngStrapVendorService from "app/extension/ui/ngStrap.vendor.js";

const bootstrapTypeaheadService = function bootstrapTypeaheadService($typeahead) {
	return $typeahead;
};

export default angular
	.module("ui.typeahead.service", [ngStrapVendorService])
	.factory("typeahead$", bootstrapTypeaheadService)
	.name
;
