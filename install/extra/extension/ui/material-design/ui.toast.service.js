"use strict";

(() => {
	const materialToastService = function materialToastService($mdToast) {
		return $mdToast;
	};
	
	angular
		.module("ui.toast.service", ["ui.material.service"])
		.factory("toast$", materialToastService)
	;
})();
