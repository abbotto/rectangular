"use strict";

describe("Project name", () => {
	let mocks;
	beforeEach(() => {
		test.module("app.model");
		test.inject("appModel");
		mocks = {
			"home$": {"project": "Rectangular"}
		};
	});

	it("is correctly set in the home view", () => {
		expect(mocks.home$.project).to.equal("Rectangular");
	});
});
