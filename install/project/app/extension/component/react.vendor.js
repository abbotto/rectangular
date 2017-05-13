"use strict";

import JSX from 'react-jsx';

(() => {
	const component$ = {};
	
	const reactVendorDirective = function reactVendorDrective(
		$rootScope,
		component$
	) {
		return {
			link: (scope, element, attrs) => {
				const watch = $rootScope.$watch;
				
				watch("component", (nv, ov) => {
						ReactDOM.render(
							(JSX.client(nv.component, {}))(nv.vm),
							element[0]
						);
					}
				);
			};
		}
	};

	const reactVendorService = function reactVendorService(
		$rootScope,
		$templateCache
	) {
		component$.view = (component, vm) => {
			$rootScope.component = {
				component: $templateCache.get(component).join(""),
				vm
			};
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
