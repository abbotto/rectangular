angular
	.module("service.material.dialog", [])
		.factory("Dialog", function ServiceMaterialDialog($mdDialog) {
			return $mdDialog;
		}
	)
;
