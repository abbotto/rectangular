"use strict";

describe("model.service", () => {
	const svc = "model.service";

	let model$, result;

	const appModelMock = {
		"project.data.json": angular.toJson({
			"name": "Rectangular"
		})
	};

	beforeEach(() => {
		__.module(svc);
		__.inject(svc);
		
		model$ = __.subject("model$");
		
		__.spy(model$, "get");
		__.stub(model$, "_constant")
			.callsFake((key) => {
				return appModelMock[key];
			})
		;
		
		result = model$.get("project.data.json");
	});
	
	describe("When 'model$.get' is called", () => {
		it("it should return the correct value", () => {
			__.expect(result).to.deep.equal(
				angular.fromJson(appModelMock["project.data.json"])
			);
		});
	});
});
