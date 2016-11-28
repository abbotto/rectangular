(() => {
	"use strict";
	
	// Module definition
	angular.module("home.component", []);
	
	// Options
	const options = {};
	
	// Template
	options.templateUrl = "home/home.component.tpl";
	
	// Controller and ViewModel
	options.controllerAs = "vm";
	options.controller = function HomeController() {
		const vm = this;
	};
	
	// Register the component
	angular.module("home.component").component("home", options);
})();
