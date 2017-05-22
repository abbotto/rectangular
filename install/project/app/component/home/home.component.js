"use strict";

// --------------------------------
// Home Component (AngularJS)
// --------------------------------
(() => {
	const HomeComponent = {};
	HomeComponent.controllerAs = "vm";
	HomeComponent.templateUrl = "home/home.component.html";
	HomeComponent.controller = require("home.controller");
	
	// --------------------------------
	// Home Component (AngularJS)
	// --------------------------------
	angular
		.module("home.component", [
			"component.directive",
			"data.service"
		])
		.component("home", HomeComponent)
	;
})();
