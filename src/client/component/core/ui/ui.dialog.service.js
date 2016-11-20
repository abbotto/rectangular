/* eslint-plugin-disable angular */
(() => {
	const materialDialogService = function materialDialogService($mdDialog) {
		return $mdDialog;
	};

	angular
	.module("ui.dialog.service", [])
	.factory("dialog$", materialDialogService);
})();
