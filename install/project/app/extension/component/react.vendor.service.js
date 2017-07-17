"use strict";

/**
* SERVICE - `component$`
* - A service for rendering `JSX` with `ReactJS`
*
* @module Extension->Component-Service
*/

const component$ = {};

export default function reactVendorService($rootScope) {
	/**
	* Updates `JSX` templates being watched by the `component` directive
	*
	* @method
	* @name render
	* @param {String} name A JSX template reference
	* @param {Object} model The view model
	* @returns {Function} Updates the JSX template in the view
	*/
	component$.render = (name, model) => {
		$rootScope[name] = model;
	};
	
	return component$;
};
