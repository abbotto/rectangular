"use strict";

import jsx from "react-jsx";

(() => {
	const component$ = {};
	
	const reactVendorDirective = function reactVendorDrective(
		$rootScope,
		$templateCache
	) {
		return {
			scope: {
				name: "="
			},
			link: (scope, element) => {
				const unmountReactElement = function unmountReactElement() {
					delete $rootScope[scope.name];
					React.unmountComponentAtNode(element[0]);
				};
				
				const renderReactComponent = function renderReactComponent(component) {
					ReactDOM.render(
						component,
						element[0]
					);
				};
				
				const scopeWatchCb = (nv, ov) => {
					if (!!nv) {
						const data = {};
						data[(nv.alias || "vm")] = nv;
						
						const component = jsx.client(
							$templateCache.get(data.vm.templateUrl), {}
						);
						
						renderReactComponent(component(data));
					}
				};
				
				const rootScopeWatchCb = (nv, ov) => {
					if (!!nv) scope[scope.name] = nv;
				};
				
				const scopeWatch = scope.$watch(scope.name, scopeWatchCb, true);
				const rootScopeWatch = $rootScope.$watch(scope.name, rootScopeWatchCb, true);
				
				// Manually unmount the React component
				// when the scope is destroyed.
				scope.$on("$destroy", unmountReactElement);
			}
		};
	};
	
	const reactVendorService = function reactVendorService($rootScope) {
		component$.render = (name, model) => {
			$rootScope[name] = model;
		};
		
		return component$;
	};
	
	angular
		.module("react.vendor.directive", [])
		.directive("component", reactVendorDirective);
	;
	
	angular
		.module("react.vendor.service", [])
		.factory("component$", reactVendorService)
	;
})();
