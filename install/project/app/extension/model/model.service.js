"use strict";

/**
* SERVICE - `model$`
* - A service for fetching and mixing data models
*
* @module Extension->Model-Service
*/

// Auto-generated file
import appModel from "~/tmp/model.auto.js";

const modelService = function modelService(modelAuto) {
	const _model = (key) => modelAuto[key];
	
	/**
	* Fetches data models
	*
	* @method
	* @name get
	* @param {String} key The path to the required model
	* @returns {Object} The requested data model
	*/
	const get = (key) => angular.fromJson(_model(key));

	/**
	* A service for fetching and mixing data models
	*
	* @method
	* @name mixin
	* @param {String} key The path to the required model
	* @param {Object} source The object to be mixed with the requested model
	* @param {Boolean} deep Perform a deep merge
	* @returns {Object} A mixture of passed in objects
	*/
	const mixin = (key, source, deep) => {
		// Get the mixin data
		const toBeMixed = get(key);
		
		// Add mixin as beginning argument
		source.unshift(toBeMixed);
		
		// Deep merge
		if (deep) {
			// eslint-disable-next-line prefer-reflect
			return angular.merge.apply(angular.merge, source);
		}
		
		// Shallow merge
		// eslint-disable-next-line prefer-reflect
		return angular.extend.apply(angular.extend, source);
	};
	
	return {_model, get, mixin};
};

export default angular
	.module("model.service", [appModel.name])
	.factory("model$", modelService)
;
