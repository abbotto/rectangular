"use strict";

(() => {
	const materialToastService = function materialToastService($mdToast) {
		return $mdToast;
	};
	
	angular
		.module("ui.toast.service", [])
		.factory("toast$", materialToastService)
	;
})();
