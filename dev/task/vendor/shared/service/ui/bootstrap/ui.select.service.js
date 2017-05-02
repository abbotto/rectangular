(() => {
	"use strict";
	
	const bootstrapSelectService = function bootstrapSelectService($select) {
		return $select;
	};
	
	angular.module("ui.select.service", []).factory("select$", bootstrapSelectService);
})();
