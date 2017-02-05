/* eslint-plugin-disable angular */
// --------------------------------
// App
// --------------------------------
(() => {
	"use strict";
	
	angular.module("app", [
		"app.constant",
		"app.route",
		"app.service",
		"app.template",
		"ngAria",
		"ngAnimate",
		"ngMessages",
		"ngSanitize"
	])
	.config($locationProvider => {
		$locationProvider.html5Mode(true);
	})
	.config(($logProvider, NODE_ENV) => {
		if (NODE_ENV === "development") $logProvider.debugEnabled(true);
	});
})();