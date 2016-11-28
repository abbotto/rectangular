(() => {
	"use strict";
	
	// Module definition
	angular.module("home.component", []);
	
	// Settings for view directive
	const options = {};
	options.templateUrl = "home/home.component.tpl";
	
	// Controller and ViewModel
	options.controller = function HomeController() {
		const vm = this;
	};
	
	// Register the component
	angular.module("home.component").component("home", options);
})();
