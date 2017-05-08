"use strict";

(() => {
	const bootstrapScrollspyService = function bootstrapScrollspyService($scrollspy) {
		return $scrollspy;
	};
	
	angular
		.module("ui.scrollspy.service", ["ui.bootstrap.service"])
		.factory("scrollspy$", bootstrapScrollspyService)
	;
})();
