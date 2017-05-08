"use strict";

(() => {
	const materialMediaService = function materialMediaService($mdMedia) {
		return $mdMedia;
	};
	
	angular
		.module("ui.media.service", ["ui.material.service"])
		.factory("media$", materialMediaService)
	;
})();
