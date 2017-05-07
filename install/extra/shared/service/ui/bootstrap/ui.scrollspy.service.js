"use strict";

(() => {
	const bootstrapScrollspyService = function bootstrapScrollspyService($scrollspy) {
		return $scrollspy;
	};
	
	angular
		.module("ui.scrollspy.service", [])
		.factory("scrollspy$", bootstrapScrollspyService)
	;
})();
