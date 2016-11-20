/* eslint-plugin-disable angular */
(() => {
	const excuseService = function excuseService(model$) {
		return () => {
			const model = model$["excuse/excuse.json"];
			const len = model.length;
			return model[Math.floor(Math.random() * len)];
		};
	};

	angular.module("excuse.service", [
		"model.service"
	])
	.factory("excuse$", excuseService);
})();
