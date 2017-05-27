"use strict";

// Auto-generated file
import appModel from "models.js";

const modelService = function modelService(appModel) {
	const _model = (key) => {
		return appModel[key];
	};
	
	const get = (key) => {
		return angular.fromJson(_model(key));
	};
	
	const mixin = (key, toBeMerged, deep) => {
		// Get the mixin data
		const toBeMixed = get(key);
		
		// Add mixin as beginning argument
		toBeMerged.unshift(toBeMixed);
		
		// Deep merge
		if (deep) {
			// eslint-disable-next-line prefer-reflect
			return angular.merge.apply(angular.merge, toBeMerged);
		}
		
		// Shallow merge
		// eslint-disable-next-line prefer-reflect
		return angular.extend.apply(angular.extend, toBeMerged);
	};
	
	return {_model, get, mixin};
};

export default angular
	.module("model.service", [appModel])
	.factory("model$", modelService)
	.name
;
