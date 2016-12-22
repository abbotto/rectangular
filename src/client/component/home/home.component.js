(() => {
	"use strict";
	
	// Module definition
	const home = angular.module("home.component", []);
	
	// Options
	const options = {};
	
	// Template
	options.templateUrl = "home/home.component.html";
	
	// Controller and ViewModel
	options.controllerAs = "vm";
	options.controller = function HomeController() {
		const vm = this;
	};
	
	// Register the component
	home.component("home", options);
})();
