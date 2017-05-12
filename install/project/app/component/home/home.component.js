"use strict";

(() => {
	// Options
	const options = {};

	// Controller and ViewModel
	options.controllerAs = "vm";
	
	options.controller = function HomeController($document, $templateCache, template$) {
		const vm = this;
		vm.projectName = "Rectangular";
		
		const template = $templateCache.get("home/home.component.html");
		
		const HomeComponent = template$.createClass({
			render() {
				return template$.createElement("div", {}, template);
			}
		});
		
		template$
			.render(
				template$.createElement(HomeComponent),
				$document.getElementsById("home-component")
			)
		;
	};

	// Register the component
	angular
		.module("home.component", ["template.service"])
		.component("home", options)
		;
})();
