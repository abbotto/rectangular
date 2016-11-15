angular
	.module("service.ui.toast", [])
		.factory("Toast", function ServiceMaterialToast($mdToast) {
			return $mdToast;
		}
	)
;
