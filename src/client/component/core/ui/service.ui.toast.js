/* eslint-plugin-disable angular */
angular
	.module("service.ui.toast", [])
		.factory("toast$", function materialToastService($mdToast) {
			return $mdToast;
		}
	)
;
