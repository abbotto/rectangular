"use strict";

import appRoute from "app/route.js";

// Auto-generated files
import appConstant from "constants.js";
import appService from "services.js";
import appTemplate from "templates.js";

angular
	.module("app", [
		appConstant.name,
		appService.name,
		appRoute.name,
		appTemplate.name,
		"ngAnimate",
		"ngAria",
		"ngMessages",
		"ngSanitize"
	])
	.config(($locationProvider) => {
		$locationProvider.html5Mode(true);
	})
	.config(($logProvider, NODE_ENV) => {
		if (NODE_ENV === "development") $logProvider.debugEnabled(true);
	})
;
