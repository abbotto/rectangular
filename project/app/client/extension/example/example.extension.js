"use strict";

(() => {
	const exampleVendorService = function exampleVendorService(example) {
		return example;
	};
	
	angular.module("example.extension", []).factory("example$", exampleVendorService);
})();
