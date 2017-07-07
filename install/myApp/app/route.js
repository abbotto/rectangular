"use strict";

// Auto-generated file
import componentRoute from "../tmp/component.route.js";

export default angular
	.module("app.route", [
		"ui.router",
		componentRoute.name
	])
	.config(($urlRouterProvider) => {
		$urlRouterProvider.otherwise("/");
	})
;
