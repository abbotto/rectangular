"use strict";

/**
* ROUTE
* - The main route module of the application
*
* @module Application->Route
*/

// Auto-generated file
import routeAuto from "~/tmp/route.auto.js";

export default angular
	.module("route", [
		"ui.router",
		routeAuto.name
	])
	.config((
		$locationProvider,
		$urlRouterProvider
	) => {
		$locationProvider.html5Mode(false);
		$urlRouterProvider.otherwise("/");
	})
;
