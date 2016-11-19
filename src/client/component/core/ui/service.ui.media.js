angular
	.module("service.ui.media", [])
		.factory("media$", function materialMediaService($mdMedia) {
			return $mdMedia;
		}
	)
;
