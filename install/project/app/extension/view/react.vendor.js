"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import ReactHtmlParser from 'react-html-parser';

(() => {
	const view$ = angular.merge({}, React, ReactDOM);
	
	view$.parse = (tpl) => {
		return ReactHtmlParser;
	}
	
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
