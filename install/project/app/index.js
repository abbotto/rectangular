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
 * - Enable HTML5 routes - removes the need for `/#/`
 * - Disable deprecated `$http` legacy promise methods
 * - Disable/enable debugging
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
	.config(($httpProvider) => {
		$httpProvider.useLegacyPromiseExtensions = false;
	})
	.config((
		$compileProvider,
		$logProvider,
		NODE_ENV
	) => {
		NODE_ENV === "development"
			? $logProvider.debugEnabled(true)
			: $compileProvider.debugInfoEnabled(false)
		;
	})
;
