"use strict";

describe("model$ service", () => {
	var appModel;
	beforeEach(() => {
		test.module("model.service");
		test.inject("model$");
		test.stub(appModel, { "project": { "name": "Rectangular" } });
	});

	it("should return the correct value", () => {
		console.log(model$.project);
		test.expect(model$.project.name).to.equal("Rectangular");
	});
});
