
"use strict";

// Auto-generated file
import componentRoute from "component.route.js";

export default angular
	.module("app.route", [
		"ui.router",
		componentRoute
	])
	.config(($urlRouterProvider) => {
		$urlRouterProvider.otherwise("/");
	})
	.name
;
