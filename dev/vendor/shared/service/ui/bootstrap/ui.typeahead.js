(() => {
	"use strict";
	
	const bootstrapTypeaheadService = function bootstrapTypeaheadService($aside) {
		return $aside;
	};
	
	angular.module("ui.typeahead.service", []).factory("typeahead$", bootstrapTypeaheadService);
})();
