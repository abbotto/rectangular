/* eslint-plugin-disable angular */
angular
	.module("service.ui.bottomSheet", [])
		.factory("bottomSheet$", function materialBottomSheetService($mdBottomSheet) {
			return $mdBottomSheet;
		}
	)
;
