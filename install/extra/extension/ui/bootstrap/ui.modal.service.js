"use strict";

import ngStrapVendorService from "app/extension/ui/ngStrap.vendor.js";

const bootstrapModalService = function bootstrapModalService($modal) {
	return $modal;
};

export default angular
	.module("ui.modal.service", [ngStrapVendorService.name])
	.factory("modal$", bootstrapModalService)
;
