"use strict";

(() => {
	const homeService = function homeService() {
		return {
			"project": "Rectangular"
		};
	};
	
	angular.module("home.service", []).factory("home$", homeService);
})();
