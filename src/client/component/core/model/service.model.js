/**
 * @ngdoc service
 * @name service.model:model$
 * @function
 *
 * @description
 * Cached component models
 *
 * **Note:** This function will return your models as you'd expect, not as JSON strings
 *
 * @example
 * model$["{{component}}/{{model}}.json"]
 */
/* eslint-plugin-disable angular */
angular
	.module("service.model", ["appModels"])
		.factory("model$", function modelService(appModel) {
			const m = appModel;
			let key;
			for (key in m) if (m.hasOwnProperty(key)) m[key] = JSON.parse(m[key]);
			return m;
		}
	)
;
