"use strict";

import appRoute from "route.js";

// Auto-generated files
import appConstant from "../tmp/constants.js";
import appService from "../tmp/services.js";
import appTemplate from "../tmp/templates.js";

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
		NODE_ENV === "development"
			&& $logProvider.debugEnabled(true)
		;
	})
;
