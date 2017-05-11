"use strict";

(() => {
	const materialDialogService = function materialDialogService($mdDialog) {
		return $mdDialog;
	};
	
	angular
		.module("ui.dialog.service", ["ui.material.service"])
		.factory("dialog$", materialDialogService)
	;
})();
