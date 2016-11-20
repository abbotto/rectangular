(() => {
	"use strict";
	
	angular
	.module("home.route", [
		"home.view"
	])
	.config($routeProvider => {
		$routeProvider
		.when("/", {
			"template": "<home></home>"
		});
	});
})();