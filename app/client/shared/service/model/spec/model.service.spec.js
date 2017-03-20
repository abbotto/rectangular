"use strict";

describe("model$ service", () => {
	beforeEach(() => {
		test.module("model.service");
		test.inject("model$");
		test.mock("appModel", (key) => { const o = { "project": { "name": "Rectangular" } }; return o[key];});
	});

	it("should return the correct value", () => {
		test.expect(model$("project").name).to.equal("Rectangular");
	});
});
