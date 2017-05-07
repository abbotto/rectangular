"use strict";

(() => {
	const uploadService = function uploadService(Upload) {
		return Upload;
	};

	angular.module("upload.service", ["ngFileUpload.extension"]).factory("upload$", uploadService);
})();
