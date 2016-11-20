/* eslint-plugin-disable angular */
(() => {
	const materialStickyService = function materialStickyService($mdSticky) {
		return $mdSticky;
	};

	angular
	.module("ui.sticky.service", [])
	.factory("sticky$", materialStickyService);
})();
