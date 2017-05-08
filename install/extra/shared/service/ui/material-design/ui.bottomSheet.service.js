"use strict";

(() => {
	const materialBottomSheetService = function materialBottomSheetService($mdBottomSheet) {
		return $mdBottomSheet;
	};
	
	angular
		.module("ui.bottomSheet.service", ["ui.material.service"])
		.factory("bottomSheet$", materialBottomSheetService)
	;
})();
