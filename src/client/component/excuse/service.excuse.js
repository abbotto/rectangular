/* eslint-plugin-disable angular */
angular
	.module("service.excuse", [
		"service.model"
	])
	.factory("excuse$", function excuseService(model$) {
		return function excuseServiceModel() {
			const model = model$["excuse/excuse.json"];
			const len = model.length;
			return model[Math.floor(Math.random() * len)];
		};
	})
;
