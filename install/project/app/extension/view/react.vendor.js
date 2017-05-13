"use strict";

import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import JSX from 'react-jsx';

(() => {
	const view$ = React;
	view$.dom = ReactDOM;
	view$.propTypes = PropTypes;

	const reactVendorDirective = function reactVendorDrective(
		$rootScope,
		view$
	) {
		return {
			link: (scope, element, attrs) => {
				$rootScope
					.$watch('template', (nv, ov) => {
						ReactDOM.render(
							(JSX.client(nv.component, {}))(nv.vm),
							element[0]
						);
					})
				;
			}
		}
	};

	const reactVendorService = function reactVendorService(
		$rootScope,
		$templateCache
	) {
		view$.template = (component, vm) => {
			$rootScope.template = {
				component: $templateCache.get(component).join(""),
				vm
			};
		};

		return view$;
	};

	angular
		.module("react.vendor.directive", ["react.vendor.service"])
		.directive("view", reactVendorDirective);
	;

	angular
		.module("react.vendor.service", [])
		.factory("view$", reactVendorService)
	;
})();
