(() => {
	"use strict";
	
	angular
	.module("excuse.route", [
		"excuse.component"
	])
	.config($stateProvider => {
		$stateProvider
		.state("excuse", {
			"url": "/excuse",
			"template": "<excuse></excuse>"
		});
	});
})();
