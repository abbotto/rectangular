"use strict";

import ComponentService from "app/extension/component/component.service.js";
let component$;

describe("component.service", () => {
	beforeEach(() => {
		component$ = ComponentService;
	});

	describe("When the `react` package is installed", () => {
		it("the `component$` service should be available", () => {
			expect(component$).toBeDefined();
			expect(typeof component$).toBe("function");
		});
	});
});
