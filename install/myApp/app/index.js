"use strict";

import appRoute from "route.js";
import appService from "service.js";

// Auto-generated files
import appEnv from "../tmp/env.auto.js";
import appTemplate from "../tmp/template.auto.js";

angular
	.module("app", [
		appEnv.name,
		appRoute.name,
		appService.name,
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
