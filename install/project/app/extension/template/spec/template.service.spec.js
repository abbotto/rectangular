"use strict";

describe("template.service", () => {
	let template$;

	beforeEach(() => {
		module("template.service");

		inject(($injector) => {
			template$ = $injector.get("template$");
		});
	});

	describe("When the `preact` package is installed", () => {
		it("the `template$` service should be available", () => {
			expect(template$).toBeDefined();
			expect(typeof template$).toBe("object");
		});
	});
});
