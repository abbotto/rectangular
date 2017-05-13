"use strict";

(() => {
	// Options
	const options = {};
	
	// Component directive
	options.template = "<component model='vm'></component>";
	options.controllerAs = "vm";

	options.controller = function HomeController(
		component$
	) {
		const vm = this;
		vm.template = "home/home.component.jsx";
		vm.projectName = "Rectangular";

		// Initialize component template
		component$.render(vm);
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
