"use strict";

(() => {
	// Options
	const options = {};

	// Template, Controller, and ViewModel
	options.template = "<view></view>";
	options.controllerAs = "vm";

	options.controller = function HomeController(
		$rootScope,
		view$
	) {
		const vm = this;
		vm.projectName = "Rectangular";
		
		view$.template("home/home.component.jsx", vm);
	};

	// Register the component
	angular
		.module("home.component", [
			"view.directive",
			"view.service"
		])
		.component("home", options)
	;
})();
