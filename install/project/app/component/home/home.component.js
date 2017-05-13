"use strict";

(() => {
	// Options
	const options = {};
	
	// Component directive
	options.template = "<component model='vm'></component>";
	
	// "View Model" variable
	options.controllerAs = "vm";

	options.controller = function HomeController(
		component$
	) {
		const vm = this;
		vm.projectName = "Rectangular";
		
		// JSX component template
		vm.template = "home/home.component.jsx";
		
		// Initialize component template
		component$.render(vm);
	};

	// Register the component
	angular
		.module("home.component", ["component.directive"])
		.component("home", options)
	;
})();
