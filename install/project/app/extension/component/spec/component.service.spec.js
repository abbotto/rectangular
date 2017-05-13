"use strict";

describe("component.service", () => {
	let component$;

	beforeEach(() => {
		module("component.service");

		inject(($injector) => {
			component$ = $injector.get("component$");
		});
	});

	describe("When the `react` package is installed", () => {
		it("the `component$` service should be available", () => {
			expect(component$).toBeDefined();
			expect(typeof component$).toBe("object");
		});
	});
});
