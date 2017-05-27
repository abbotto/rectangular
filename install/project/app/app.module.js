"use strict";

import appRoute from "app/app.route.js";

// Auto-generated files
import appConstant from "constants.js";
import appService from "app.service.js";
import appTemplate from "templates.js";

angular
	.module("app", [
		appConstant,
		appService,
		appRoute,
		appTemplate,
		"ngAnimate",
		"ngAria",
		"ngMessages",
		"ngSanitize"
	])
	.config(function ($locationProvider) {
		$locationProvider.html5Mode(true);
	})
	.config(function ($logProvider, NODE_ENV) {
		if (NODE_ENV === "development") $logProvider.debugEnabled(true);
	})
;
