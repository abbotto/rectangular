/* eslint-plugin-disable angular */
(() => {
	"use strict";
	
	angular.module("upload.service", [
		"upload.extension"
	]);

	const uploadService = function uploadService(Upload) {
		return Upload;
	};

	angular.module("upload.service").factory("upload$", uploadService);
})();
