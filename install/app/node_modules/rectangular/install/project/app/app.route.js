"use strict";

(() => {
	angular.module("app.route", [
		"ui.router",
		"component.route"
	])
	.config($urlRouterProvider => {
		$urlRouterProvider.otherwise("/");
	});
})();
