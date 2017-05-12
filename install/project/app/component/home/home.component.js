"use strict";

(() => {

	// Options
	const options = {};

	// Template, Controller, and ViewModel
	options.template = "<div id='home-component'></div>";
	options.controllerAs = "vm";

	options.controller = function HomeController(
		view$
	) {		
		const vm = this;
		vm.projectName = "Rectangular";

		view$
			.dom.render(
				view$.template("home/home.component.html"),
				document.getElementById("home-component")
			)
		;
	};

	// Register the component
	angular
		.module("home.component", ["view.service"])
		.component("home", options)
	;
})();
