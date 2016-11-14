angular
	.module("service.excuse", [
		"service.model"
	])
	.service("excuse", function ServiceExcuse(Model) {
		this.get = () => {
			const model = Model["excuse/excuse.json"];
			return model[Math.floor(Math.random() * model.length)];
		}
	})
;
