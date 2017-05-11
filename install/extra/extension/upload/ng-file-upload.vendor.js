"use strict";

(() => {
	const ngFileUploadVendorService = function ngFileUploadVendorService(Upload) {
		return Upload;
	};

	angular
		.module("ngFileUpload.vendor.service", ["ngFileUpload"])
		.factory("upload$", ngFileUploadVendorService)
	;
})();
