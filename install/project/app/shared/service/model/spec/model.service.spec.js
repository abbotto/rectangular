"use strict";

describe("model.service", () => {
	let model$, result;
	
	const mockKey = "project.data.json";
	
	const appModelMock1 = angular.toJson({
		"project.data.json": angular.toJson({
			name: "Rectangular"
		})
	});

	const appModelMock2 = angular.toJson({
		"project.data.json": angular.toJson({
			name: "Rectangular",
			version: "1.0.0"
		})
	});

	beforeEach(() => {
		module("model.service");

		inject(($injector) => {
			model$ = $injector.get("model$");
		});
		
		model$._model = __.createSpy("model$._model");

		model$._model.and.callFake((key) => {
			return appModelMock1[key];
		});
	});

	describe("When 'model$._model' is called", () => {
		beforeEach(() => {
			result = model$._model(mockKey);
		});

		it("it should be called exactly once", () => {
			expect(model$._model.calls.count()).toEqual(1);
		});

		it("it should be called with the correct arguments", () => {
			expect(model$._model.calls.mostRecent().args[0]).toEqual(mockKey);
		});

		it("it should return the correct value", () => {
			expect(model$._model(mockKey)).toEqual(appModelMock1[mockKey]);
		});
	});

	describe("When 'model$.get' is called", () => {
		beforeEach(() => {
			model$.get = __.createSpy("model$.get");
			result = model$.get(mockKey);
		});
		
		it("it should be called exactly once", () => {
			expect(model$.get.calls.count()).toEqual(1);
		});
		
		it("it should be called with the correct arguments", () => {
			expect(model$.get.calls.mostRecent().args[0]).toEqual(mockKey);
		});
		
		it("it should return the correct value", () => {
			expect(result).toEqual(
				angular.fromJson(appModelMock1[mockKey])
			);
		});
	});

	describe("When 'model$.mixin' is called", () => {
		beforeEach(() => {
			model$.mixin = __.createSpy("model$.mixin");
			result = model$.mixin(mockKey, [{version: "1.0.0"}]);
		});
		
		it("it should be called exactly once", () => {
			expect(model$.mixin.calls.count()).toEqual(1);
		});
		
		it("it should be called with the correct arguments", () => {
			expect(model$.mixin.calls.mostRecent().args[0]).toEqual(mockKey);
		});
		
		it("it should return the correct value", () => {
			expect(result).toEqual(
				angular.fromJson(appModelMock2[mockKey])
			);
		});
	});
});
