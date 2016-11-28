/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	angular.module("ui.media.service", []);
	
	const materialMediaService = function materialMediaService($mdMedia) {
		return $mdMedia;
	};

	angular.module("ui.media.service")
	.factory("media$", materialMediaService);
})();
