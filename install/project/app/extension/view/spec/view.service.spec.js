"use strict";

describe("view.service", () => {
	let view$;

	beforeEach(() => {
		module("view.service");

		inject(($injector) => {
			view$ = $injector.get("view$");
		});
	});

	describe("When the `preact` package is installed", () => {
		it("the `view$` service should be available", () => {
			expect(view$).toBeDefined();
			expect(typeof view$).toBe("object");
		});
	});
});
