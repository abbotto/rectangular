"use strict";

import DataService from "app/extension/data/data.service.js";
let data$;

describe("data.service", () => {
	beforeEach(() => {
		data$ = DataService;
	});
	
	describe("When the `immutable` package is installed", () => {
		it("the `data$` service should be available", () => {
			expect(data$).toBeDefined();
			expect(typeof data$).toBe("object");
		});
	});
});
