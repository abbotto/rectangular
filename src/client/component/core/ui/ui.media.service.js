/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	const materialMediaService = function materialMediaService($mdMedia) {
		return $mdMedia;
	};

	angular
	.module("ui.media.service", [])
	.factory("media$", materialMediaService);
})();
