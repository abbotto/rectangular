"use strict";

(() => {
	const bootstrapAffixService = function bootstrapAffixService($affix) {
		return $affix;
	};
	
	angular
		.module("ui.affix.service", [])
		.factory("affix$", bootstrapAffixService)
	;
})();
