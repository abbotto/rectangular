"use strict";

(() => {
	// Options
	const options = {};
	
	// Template
	options.templateUrl = "home/home.component.html";
	
	// Controller and ViewModel
	options.controllerAs = "vm";
	options.controller = function HomeController(home$) {
		const vm = this;
		
		vm.projectName = home$();
	};
	
	// Register the component
	angular.module("home.component", ["home.service"]).component("home", options);
})();
