/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	angular.module("ui.toast.service", []);
	
	const materialToastService = function materialToastService($mdToast) {
		return $mdToast;
	};
	
	angular.module("ui.toast.service")
	.factory("toast$", materialToastService);
})();
