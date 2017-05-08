"use strict";

(() => {
	const bootstrapTypeaheadService = function bootstrapTypeaheadService($typeahead) {
		return $typeahead;
	};
	
	angular
		.module("ui.typeahead.service", [])
		.factory("typeahead$", bootstrapTypeaheadService)
	;
})();
