"use strict";

(() => {	
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
	angular.module("home.component", []).component("home", options);
})();
