"use strict";

describe("model.service", () => {
	const svc = "model.service";

	let _modelSpy, getSpy, mixinSpy, model$, result, spy;
	
	const mockKey = "project.data.json";
	
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
		
		// __.stub(model$, "_model")
		// 	.callsFake((key) => {
		// 		return appModelMock1[key];
		// 	})
		// ;
	});
	
	// describe("When 'model$._model' is called", () => {
	// 	beforeEach(() => {
	// 		__.spy(model$, "get");
	// 		result = model$.get(mockKey);
	// 	});
	
	// 	// it("it should call 'model$._model' exactly once", () => {
	// 	// 	__.expect(model$._model).callCount.to.equal(1);
	// 	// });
	
	// 	// it("it should call 'model$._model' with the correct arguments", () => {
	// 	// 	__.expect(model$._model).to.be.called.withArgs(mockKey);
	// 	// });
	
	// 	it("it should call 'model$._model' with the correct arguments", () => {
	// 		__.expect(model$._model).to.be.called.withArgs(mockKey);
	// 	});
	
	// 	it("it should return the correct value", () => {
	// 		__.expect(result).to.deep.equal(
	// 			angular.fromJson(appModelMock1[mockKey])
	// 		);
	// 	});
	// });
	
	describe("When 'model$.get' is called", () => {
		beforeEach(() => {
			spy = sinon.spy(model$, "get");
			
		});
		
		afterEach(() => {
			model$.get.restore();
		});
		
		it("it should call 'model$.get' with the correct arguments", () => {
			__.expect(model$.get(mockKey)).to.be.called.withArgs(mockKey);
		});
		
		// it("it should return the correct value", () => {
		// 	__.expect(result).to.deep.equal(
		// 		angular.fromJson(appModelMock1[mockKey])
		// 	);
		// });
	});

	// describe("When 'model$.mixin' is called", () => {
	// 	beforeEach(() => {
	// 		mixinSpy = __.spy(model$, "mixin");
			
	// 		__.stub()
	// 			.callsFake((key) => {
	// 				return appModelMock1[key];
	// 			})
	// 		;
			
	// 		result = model$.mixin(mockKey, [{version: "1.0.0"}]);
	// 	});

	// 	// it("it should call 'model$.mixin' with the correct arguments", () => {
	// 	// 	__.expect(mixinSpy).to.be.called.withArgs(mockKey);
	// 	// });

	// 	it("it should return the correct value", () => {
	// 		__.expect(result).to.deep.equal(
	// 			angular.fromJson(appModelMock2[mockKey])
	// 		);
	// 	});
	// });
});
