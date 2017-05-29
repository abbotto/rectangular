"use strict";

import RestangularVendorService from "app/extension/rest/restangular.vendor.service.js";

export default angular
	.module("rest.service", [])
	.factory("rest$", RestangularVendorService)
;
