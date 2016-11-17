angular
	.module("service.ui.bottomSheet", [])
		.factory("BottomSheet$", function MaterialBottomSheetService($mdBottomSheet) {
			return $mdBottomSheet;
		}
	)
;
