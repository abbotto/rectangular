
"use strict";

const component$ = {};

export default function reactVendorService($rootScope) {
	component$.render = (name, model) => {
		$rootScope[name] = model;
	};
	
	return component$;
};
