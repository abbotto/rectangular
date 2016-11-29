// --------------------------------
// Routes
// --------------------------------
(() => {
	"use strict";
	
	angular.module("app.route", [
		"ui.router",
		"home.route"
	])
	.config($urlRouterProvider => {
		$urlRouterProvider.otherwise("/");
	});
})();