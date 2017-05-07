"use strict";

(() => {
	const bootstrapAffixService = function bootstrapAffixService($aside) {
		return $aside;
	};
	
	angular
		.module("ui.affix.service", [])
		.factory("affix$", bootstrapAffixService)
	;
})();
