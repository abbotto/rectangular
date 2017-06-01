"use strict";

import NgFileUploadVendorService from "app/extension/upload/ng-file-upload.vendor.service.js";

export default angular
	.module("upload.service", [])
	.factory("upload$", NgFileUploadVendorService)
;
