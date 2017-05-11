"use strict";

describe("date.service", () => {
	let date$;

	beforeEach(() => {
		module("date.service");

		inject(($injector) => {
			date$ = $injector.get("date$");
		});
	});

	describe("When the `moment` package is installed", () => {
		it("the `date$` service should be available", () => {
			expect(date$).toBeDefined();
			expect(typeof date$).toBe("function");
		});
	});
});
