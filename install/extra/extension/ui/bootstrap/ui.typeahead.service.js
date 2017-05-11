"use strict";

(() => {
	const bootstrapTypeaheadService = function bootstrapTypeaheadService($typeahead) {
		return $typeahead;
	};
	
	angular
		.module("ui.typeahead.service", ["ui.bootstrap.service"])
		.factory("typeahead$", bootstrapTypeaheadService)
	;
})();
