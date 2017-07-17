"use strict";

/**
* Service - `typeahead$`
* - Exposes the Angular Strap `Typeahead` service
* - Requires `angular-strap`
*
* @module Extension->UI-Typeahead-Service
*/

import ngStrapVendorService from "~/app/extension/ui/ng-strap.vendor.service.js";

const bootstrapTypeaheadService = function bootstrapTypeaheadService($typeahead) {
	return $typeahead;
};

export default angular
	.module("ui.typeahead.service", [ngStrapVendorService.name])
	.factory("typeahead$", bootstrapTypeaheadService)
;
