"use strict";

(() => {

	// Options
	const component = {};

	// Template, Controller, and ViewModel
	component.template = "<div id='home-component'></div>";
	component.controllerAs = "vm";

	component.controller = function HomeController(
		view$
	) {		
		const vm = this;
		vm.projectName = "Rectangular";

		view$
			.render(
				view$.parse(view$.template("home/home.component.html")),
				document.getElementById("home-component")
			)
		;
	};

	// Register the component
	angular
		.module("home.component", ["view.service"])
		.component("home", component)
	;
})();
