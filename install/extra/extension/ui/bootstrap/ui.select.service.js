"use strict";

(() => {
	const bootstrapSelectService = function bootstrapSelectService($select) {
		return $select;
	};
	
	angular
		.module("ui.select.service", ["ui.bootstrap.service"])
		.factory("select$", bootstrapSelectService)
	;
})();
