"use strict";

/**
* @ngdoc service
* @name component.service:component$
*
* @description
* A service for rendering JSX with ReactJS
*/

const component$ = {};

export default function reactVendorService($rootScope) {
	/**
	* @ngdoc method
	* @name render
	* @methodOf component.service:component$
	*
	* @description
	* Updates a JSX templates for the `component` directive watcher
	*
	* @param {String} name A JSX template reference
	* @param {Object} model The view model
	* @returns {Function} Updates the JSX template view
	*/
	component$.render = (name, model) => {
		$rootScope[name] = model;
	};
	
	return component$;
};
