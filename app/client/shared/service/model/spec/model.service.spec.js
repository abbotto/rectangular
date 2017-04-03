"use strict";

describe("model.service", () => {
	const svc = "model.service";

	let model$, result;

	const appModelMock1 = {
		"project.data.json": angular.toJson({
			"name": "Rectangular"
		})
	};

	const appModelMock2 = {
		"project.data.json": angular.toJson({
			"name": "Rectangular",
			"version": "1.0.0"
		})
	};

	beforeEach(() => {
		__.module(svc);
		__.inject(svc);
		
		model$ = __.subject("model$");
		
		__.stub(model$, "_model")
			.callsFake((key) => {
				return appModelMock1[key];
			})
		;
	});
	
	describe("When 'model$.get' is called", () => {
		beforeEach(() => {
			__.spy(model$, "get");
			result = model$.get("project.data.json");
		});
		
		it("it should return the correct value", () => {
			__.expect(result).to.deep.equal(
				angular.fromJson(appModelMock1["project.data.json"])
			);
		});
	});
	
	describe("When 'model$.mixin' is called", () => {
		beforeEach(() => {
			__.spy(model$, "mixin");
			result = model$.mixin("project.data.json", [{version: "1.0.0"}]);
		});
		
		it("it should return the correct value", () => {
			__.expect(result).to.deep.equal(
				angular.fromJson(appModelMock2["project.data.json"])
			);
		});
	});
});
