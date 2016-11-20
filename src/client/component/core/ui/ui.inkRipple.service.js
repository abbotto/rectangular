/* eslint-plugin-disable angular */
(() => {
	const materialInkRippleService = function materialInkRippleService($mdInkRipple) {
		return $mdInkRipple;
	};
	
	angular
	.module("ui.inkRipple.service", [])
	.factory("inkRipple$", materialInkRippleService);
})();
