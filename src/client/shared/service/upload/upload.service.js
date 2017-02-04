(() => {
	"use strict";
	
	const uploadService = function uploadService(Upload) {
		return Upload;
	};

	angular.module("upload.service", [
		"upload.extension"
	]).factory("upload$", uploadService);
})();
