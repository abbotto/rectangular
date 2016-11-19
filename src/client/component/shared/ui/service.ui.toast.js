angular
	.module("service.ui.toast", [])
		.factory("Toast$", function MaterialToastService($mdToast) {
			return $mdToast;
		}
	)
;
