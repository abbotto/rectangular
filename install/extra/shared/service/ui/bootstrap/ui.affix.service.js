"use strict";

(() => {
	const bootstrapAffixService = function bootstrapAffixService($affix) {
		return $affix;
	};
	
	angular
		.module("ui.affix.service", ["ui.bootstrap.service"])
		.factory("affix$", bootstrapAffixService)
	;
})();
