"use strict";

(() => {
	// Options
	const options = {};
	
	// Component directive
	options.template = "<component></component>";
	options.controllerAs = "vm";

	options.controller = function HomeController(
		$rootScope,
		component$
	) {
		const vm = this;
		vm.projectName = "Rectangular";
		
		// Load the component template
		component$.view("home/home.component.jsx", vm);
	};

	// Register the component
	angular
		.module("home.component", [
			"component.directive",
			"component.service"
		])
		.component("home", options)
	;
})();
