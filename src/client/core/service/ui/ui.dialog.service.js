/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	angular.module("ui.dialog.service", []);
	
	const materialDialogService = function materialDialogService($mdDialog) {
		return $mdDialog;
	};
	
	angular.module("ui.dialog.service").factory("dialog$", materialDialogService);
})();
