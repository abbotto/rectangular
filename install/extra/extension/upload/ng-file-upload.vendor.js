"use strict";

const ngFileUploadVendorService = function ngFileUploadVendorService(Upload) {
	return Upload;
};

export default angular
	.module("ngFileUpload.vendor.service", ["ngFileUpload"])
	.factory("upload$", ngFileUploadVendorService)
	.name
;
