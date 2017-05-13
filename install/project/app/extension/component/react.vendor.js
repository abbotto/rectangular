"use strict";

import ReactDOM from "react-dom";
import JSX from "react-jsx";

(() => {
	const component$ = {};

	const reactVendorDirective = function reactVendorDrective(
		$rootScope,
		$templateCache
	) {
		return {
			scope: {
				model: "="
			},
			link: (scope, element) => {
				scope.$watch("model", (nv, ov) => {
					ReactDOM.render(
						(JSX.client($templateCache.get(nv.template), {}))(nv),
						element[0]
					);
				});
				
				// Set value on first run
				scope.model = scope.model ? scope.model : $rootScope.model;
			}
		};
	};

	const reactVendorService = function reactVendorService(
		$rootScope
	) {
		component$.render = (model) => {
			$rootScope.model = model;
		};

		return component$;
	};

	angular
		.module("react.vendor.directive", ["react.vendor.service"])
		.directive("component", reactVendorDirective);
	;

	angular
		.module("react.vendor.service", [])
		.factory("component$", reactVendorService)
	;
})();
