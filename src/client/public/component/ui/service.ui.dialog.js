angular
	.module("service.ui.dialog", [])
		.factory("Dialog", function ServiceMaterialDialog($mdDialog) {
			return $mdDialog;
		}
	)
;
