
"use strict";

const component$ = {};

const reactVendorService = function reactVendorService($rootScope) {
	component$.render = (name, model) => {
		$rootScope[name] = model;
	};
	
	return component$;
};

export default angular
	.module("react.vendor.service", [])
	.factory("component$", reactVendorService)
	.name
;
