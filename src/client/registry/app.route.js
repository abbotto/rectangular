// --------------------------------
// Routes
// --------------------------------
(() => {
	"use strict";
	
	angular.module("app.route", [
		"ui.router",
		"home.route",
		"excuse.route"
	])
	.config($urlRouterProvider => {
		$urlRouterProvider.otherwise("/");
	});
})();
