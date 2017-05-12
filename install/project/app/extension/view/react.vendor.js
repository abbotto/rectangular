"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'html-react-parser';

(() => {
	const view$ = React;
	view$.dom = ReactDOM;
	view$.propTypes = PropTypes;
	
	const reactVendorService = function reactVendorService($templateCache) {
		view$.template = (tpl, obj) => {
			return ReactHtmlParser($templateCache.get(tpl));
		};
		
		return view$;
	};

	angular
		.module("react.vendor.service", [])
		.factory("view$", reactVendorService)
	;
})();
