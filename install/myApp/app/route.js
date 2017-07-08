"use strict";

// Auto-generated file
import routeAuto from "../tmp/route.auto.js";

export default angular
	.module("route", [
		"ui.router",
		routeAuto.name
	])
	.config(($urlRouterProvider) => {
		$urlRouterProvider.otherwise("/");
	})
;
