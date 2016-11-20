(() => {
	"use strict";
	
	angular
	.module("excuse.route", [
		"excuse.view"
	])
	.config($routeProvider => {
		$routeProvider
		.when("/excuse", {
			"template": "<excuse></excuse>"
		});
	});
})();
