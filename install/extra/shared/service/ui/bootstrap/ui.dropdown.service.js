"use strict";

(() => {
	const bootstrapDropdownService = function bootstrapDropdownService($dropdown) {
		return $dropdown;
	};
	
	angular
		.module("ui.dropdown.service", ["ui.bootstrap.service"])
		.factory("dropdown$", bootstrapDropdownService)
	;
})();
