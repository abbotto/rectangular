"use strict";

describe("rest.service", () => {
	let rest$;

	beforeEach(() => {
		module("rest.service");

		inject(($injector) => {
			rest$ = $injector.get("rest$");
		});
	});

	describe("When the `restangular` package is installed", () => {
		it("the `rest$` service should be available", () => {
			expect(rest$).toBeDefined();
			expect(typeof rest$).toBe("object");
		});
	});
});
