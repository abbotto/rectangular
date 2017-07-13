"use strict";

import ngStrapVendorService from "~/app/extension/ui/ng-strap.vendor.service.js";

const bootstrapModalService = function bootstrapModalService($modal) {
	return $modal;
};

export default angular
	.module("ui.modal.service", [ngStrapVendorService.name])
	.factory("modal$", bootstrapModalService)
;
