/* eslint-plugin-disable angular */
angular
	.module("service.ui.dialog", [])
		.factory("dialog$", function materialDialogService($mdDialog) {
			return $mdDialog;
		}
	)
;
