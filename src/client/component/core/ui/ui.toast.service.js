/* eslint-plugin-disable angular */
(() => {
	const materialToastService = function materialToastService($mdToast) {
		return $mdToast;
	};

	angular
	.module("ui.toast.service", [])
	.factory("toast$", materialToastService);
})();
