"use strict";

(() => {
	const bootstrapDropdownService = function bootstrapDropdownService($dropdown) {
		return $dropdown;
	};
	
	angular
		.module("ui.dropdown.service", [])
		.factory("dropdown$", bootstrapDropdownService)
	;
})();
