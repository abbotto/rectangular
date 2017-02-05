"use strict";

(() => {
	angular
	.module("home.route", [
		"home.component"
	])
	.config($stateProvider => {
		$stateProvider
		.state("home", {
			"url": "/",
			"template": "<home></home>"
		});
	});
})();
