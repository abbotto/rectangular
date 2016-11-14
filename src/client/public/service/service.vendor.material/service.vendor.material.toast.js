angular
	.module("service.material.toast", [])
		.factory("Toast", function ServiceMaterialToast($mdToast) {
			return $mdToast;
		}
	)
;
