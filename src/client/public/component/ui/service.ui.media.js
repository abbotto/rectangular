angular
	.module("service.ui.media", [])
		.factory("Media$", function MaterialMediaService($mdMedia) {
			return $mdMedia;
		}
	)
;
