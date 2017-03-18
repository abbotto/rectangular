"use strict";

describe("Project name", () => {

	beforeEach(() => {
		test.module(
			"home.service"
		);
		test.inject(
			"home$"
		);
	});

	it("is correctly set in the home view", () => {
		expect(home$.project).to.equal("Rectangular");
	});
});
