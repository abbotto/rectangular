/* eslint-plugin-disable angular */
(() => {
	const materialMediaService = function materialMediaService($mdMedia) {
		return $mdMedia;
	};

	angular
	.module("ui.media.service", [])
	.factory("media$", materialMediaService);
})();
