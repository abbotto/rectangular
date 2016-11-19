angular
	.module("service.excuse", [
		"service.model"
	])
	.factory("Excuse$", function ExcuseService(Model$) {
		return function ExcuseServiceModel() {
			const model = Model$["excuse/excuse.json"];
			const len = model.length;
			return model[Math.floor(Math.random() * len)];
		};
	})
;
