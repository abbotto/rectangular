"use strict";

/**
 * CONFIGURATION
 * - The application entry point
 * - Imports default modules
 *     - `env.auto`
 *     - `ngAnimate`
 *     - `ngAria`
 *     - `ngMessages`
 *     - `ngSanitize`
 *     - `route`
 *     - `service`
 *     - `template.auto`
 * - Sets `html5Mode` to true
 * - Sets `$logProvider.debugEnabled` to true when in `development` mode
 *
 * @module Application
 */

import appRoute from "~/app/route.js";
import appService from "~/app/service.js";

// Auto-generated files
import appEnv from "~/tmp/env.auto.js";
import appTemplate from "~/tmp/template.auto.js";

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
