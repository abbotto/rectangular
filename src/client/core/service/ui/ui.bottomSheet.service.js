/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	angular.module("ui.bottomSheet.service", []);
	
	const materialBottomSheetService = function materialBottomSheetService($mdBottomSheet) {
		return $mdBottomSheet;
	};
	
	angular.module("ui.bottomSheet.service")
	.factory("bottomSheet$", materialBottomSheetService);
})();
