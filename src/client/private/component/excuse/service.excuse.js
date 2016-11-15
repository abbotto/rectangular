angular
	.module("service.excuse", [
		"service.model"
	])
	.factory("Excuse", function ServiceExcuse(Model) {
		const model = Model["excuse/excuse.json"];
		return model[Math.floor(Math.random() * model.length)];
	})
;
