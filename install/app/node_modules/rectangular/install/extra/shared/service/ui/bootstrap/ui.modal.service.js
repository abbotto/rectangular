(() => {
	"use strict";
	
	const bootstrapModalService = function bootstrapModalService($modal) {
		return $modal;
	};
	
	angular.module("ui.modal.service", []).factory("modal$", bootstrapModalService);
})();
