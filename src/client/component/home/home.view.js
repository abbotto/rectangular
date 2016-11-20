(() => {
	"use strict";
	
	// --------------------------------
	// Model for view directive
	// --------------------------------
	let view = {};
	view.templateUrl = "home/home.view.tpl";
	
	// --------------------------------
	// Controller and ViewModel
	// --------------------------------
	view.controller = function HomeController($log) {
		$log.debug("HomeView has loaded.");
	};
	
	// --------------------------------
	// View module
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
