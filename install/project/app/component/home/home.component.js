"use strict";

(() => {

	// Options
	const options = {};

	// Controller and ViewModel
	options.controllerAs = "vm";
	
	// Container for content
	options.template = "<div id='home-component'></div>";

	options.controller = function HomeController(
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
		.component("home", options)
		;
})();
