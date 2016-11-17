angular
	.module("service.excuse", [
		"service.model"
	])
	.factory("Excuse", function ServiceExcuse(Model) {
		return function ServiceExcuseModel() {
			const model = Model["excuse/excuse.json"];
			const len = model.length;
			return model[Math.floor(Math.random() * len)];
		};
	})
;
