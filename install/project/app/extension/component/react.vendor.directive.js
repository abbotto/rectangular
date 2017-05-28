"use strict";

import componentService from "app/extension/component/react.vendor.service.js";
import React from "react";
import {render} from "react-dom";
import {client} from "react-jsx";

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
			
			// Render React element
			const renderReactComponent = function renderReactComponent(component) {
				render(
					component,
					element[0]
				);
			};
			
			const scopeWatchCb = (nv) => {
				if (nv) {
					const data = {};
					data[(nv.alias || "vm")] = nv;
					
					// Convert JSX to React element
					const component = client(
						$templateCache.get(data.vm.templateUrl), {}
					);
					
					renderReactComponent(component(data));
				}
			};
			
			const rootScopeWatchCb = (nv) => {
				if (nv) scope[scope.name] = nv;
			};
			
			const scopeWatch = scope.$watch(scope.name, scopeWatchCb, true);
			const rootScopeWatch = $rootScope.$watch(scope.name, rootScopeWatchCb, true);
			
			// Manually unmount the React component
			// when the scope is destroyed.
			scope.$on("$destroy", unmountReactElement);
		}
	};
};

export default angular
	.module("react.vendor.directive", [componentService])
	.directive("component", reactVendorDirective)
	.name
;
