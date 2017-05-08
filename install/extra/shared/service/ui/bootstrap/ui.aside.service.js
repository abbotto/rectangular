"use strict";

(() => {
	const bootstrapAsideService = function bootstrapAsideService($aside) {
		return $aside;
	};
	
	angular
		.module("ui.aside.service", [])
		.factory("aside$", bootstrapAsideService)
	;
})();
