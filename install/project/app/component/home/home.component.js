"use strict";

(() => {
	// Options
	const options = {};

	// Controller and ViewModel
	options.controllerAs = "vm";
	options.template = "<div id='home-component'></div>";
	const el = document.createElement("div");
	
	options.controller = function HomeController(
		$templateCache,
		view$
	) {
		const vm = this;
		vm.projectName = "Rectangular";
		
		el.innerHTML = $templateCache.get("home/home.component.html");
		
		// const HomeComponent = view$.Component({
		// 	render() {
		// 		return view$.createElement("div", {}, template);
			// 	}
		// });
		
		view$
			.render((el),
			document.getElementById("home-component")
		);
	};

	// Register the component
	angular
		.module("home.component", ["view.service"])
		.component("home", options)
	;
})();
