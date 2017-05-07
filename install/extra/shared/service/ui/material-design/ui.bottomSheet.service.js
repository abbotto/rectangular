"use strict";

(() => {
	const materialBottomSheetService = function materialBottomSheetService($mdBottomSheet) {
		return $mdBottomSheet;
	};
	
	angular
		.module("ui.bottomSheet.service", [])
		.factory("bottomSheet$", materialBottomSheetService)
	;
})();
