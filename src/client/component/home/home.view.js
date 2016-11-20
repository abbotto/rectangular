(() => {
	"use strict";
	
	// --------------------------------
	// View model for view directive
	// --------------------------------
	let view = {};
	view.templateUrl = "home/home.view.tpl";
	
	// --------------------------------
	// Controller for view model
	// --------------------------------
	view.controller = function HomeController($log) {
		$log.debug("HomeView has loaded.");
	};
	
	// --------------------------------
	// View directive module
	// --------------------------------
	angular.module("home.view", [
		"mixin.service"
	])
	.directive("home", function homeView(mixin$) {
		// Set defaults for view.link
		view = mixin$("view.mixin.json", [view]);
		return view;
	});
})();
