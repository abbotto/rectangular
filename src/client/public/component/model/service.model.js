/**
 * @ngdoc directive
 * @name service.model:Model
 * @function
 *
 * @description
 * Cached component models
 *
 * **Note:** This function will return your models as you'd expect, not as JSON strings
 *
 * @example
 * Model["{{component}}/{{model}}.json"]
 */
angular
	.module("service.model", ["ngModels"])
		.factory("Model", function ServiceModel(ngModel) {
			for (const key in ngModel) {
				if (ngModel.hasOwnProperty(key)) ngModel[key] = JSON.parse(ngModel[key]);
			}
			return ngModel;
		}
	)
;
