"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

(() => {
	const view$ = angular.merge({}, {PropTypes}, React, ReactDOM, {parse: ReactHtmlParser});
	
	const reactVendorService = function reactVendorService($templateCache) {
		view$.template = (tpl) => {
			return $templateCache.get(tpl);
		};
		
		return view$;
	};

	angular
		.module("react.vendor.service", [])
		.factory("view$", reactVendorService)
	;
})();
