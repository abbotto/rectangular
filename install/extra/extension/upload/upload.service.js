"use strict";

import NgFileUploadVendorService from "app/extension/upload/ngFileUpload.vendor.service.js";

export default angular
	.module("upload.service", [])
	.factory("upload$", NgFileUploadVendorService)
;
