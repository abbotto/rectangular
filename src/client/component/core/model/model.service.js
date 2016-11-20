/* eslint-plugin-disable angular */
(() => {
	const modelService = function modelService(appModel) {
		const m = appModel;
		let key;
		for (key in m) if (m.hasOwnProperty(key)) m[key] = JSON.parse(m[key]);
		return m;
	};

	angular.module("model.service", [
		"appModel"
	])
	.factory("model$", modelService);
})();
