"use strict";

import React from "react";
import ReactDOM from "react-dom";
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
				scope.name = "React" + scope.name + "Component";
				
				const unmountElement = function unmountElement() {
					delete $rootScope[scope.name];
					React.unmountComponentAtNode(element[0]);
				};
				
				const renderComponent = function renderComponent(component) {
					ReactDOM.render(
						component,
						element[0]
					);
				};
				
				scope.$watch(scope.name, (nv, ov) => {
					if (!!nv) {
						const data = {};
						data[(nv.controllerAs || "vm")] = nv;

						const component = jsx.client(
							$templateCache.get(data.vm.templateUrl), {}
						);
						
						renderComponent(component(data));
					}
				}, true);
				
				$rootScope.$watch(scope.name, (nv, ov) => {
					!!nv && scope[scope.name] = nv;
				}, true);
				
				// Manually unmount the React component
				// for view cleanup when the scope is destroyed.
				scope.$on("$destroy", unmountElement);
			}
		};
	};

	const reactVendorService = function reactVendorService(
		$rootScope
	) {
		component$.render = (name, model) => {
			$rootScope["React" + name + "Component"] = model;
		};

		return component$;
	};

	angular
		.module("react.vendor.directive", [])
		.directive("view", reactVendorDirective);
	;

	angular
		.module("react.vendor.service", [])
		.factory("component$", reactVendorService)
	;
})();
