"use strict";

(() => {
	const dateService = function dateService(moment$) {
		return moment$;
	};
	
	angular.module("date.service", ["date.extension"]).factory("date$", dateService);
})();
