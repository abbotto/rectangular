"use strict";

describe("_.service", () => {
	let _;

	beforeEach(() => {
		module("_.service");

		inject(($injector) => {
			_ = $injector.get("_");
		});
	});

	describe("When the `lodash` extension is installed", () => {
		it("the `_` service should be available", () => {
			expect(_).toBeDefined();
			expect(typeof _).toBe("function");
		});
	});
});
