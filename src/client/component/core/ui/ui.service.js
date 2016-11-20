(() => {
	angular
	.module("ui.service", [
		"ngMaterial"
	])
	.config($mdThemingProvider => {
		// https://material.angularjs.org/latest/Theming/01_introduction
		// https://material.angularjs.org/latest/api/service/$mdThemingProvider
		$mdThemingProvider.theme("default")
			.primaryPalette("grey", {
				"default": "800", // by default use shade 800 for primary intentions
				"hue-1": "200", // use shade 100 for the <code>md-hue-1</code> class
				"hue-2": "400", // use shade 600 for the <code>md-hue-2</code> class
				"hue-3": "A100" // use shade A100 for the <code>md-hue-3</code> class
			})
			.accentPalette("light-green", {
				"default": "500"
			})
			.warnPalette("red")
		;
	})
	.config($mdAriaProvider => {
		// https://material.angularjs.org/latest/api/service/$mdAriaProvider
	})
	.config($mdDateLocaleProvider => {
		// https://material.angularjs.org/latest/api/service/$mdDateLocaleProvider
	})
	.config(($sceDelegateProvider, $mdIconProvider) => {
		// https://material.angularjs.org/latest/api/service/$mdIconProvider
	})
	.config($mdProgressCircularProvider => {
		// https://material.angularjs.org/latest/api/service/$mdProgressCircular
	});
})();
