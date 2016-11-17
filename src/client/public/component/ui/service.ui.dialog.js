angular
	.module("service.ui.dialog", [])
		.factory("Dialog$", function MaterialDialogService($mdDialog) {
			return $mdDialog;
		}
	)
;
