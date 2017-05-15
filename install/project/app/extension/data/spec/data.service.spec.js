"use strict";

describe("data.service", () => {
	let data$;
	
	beforeEach(() => {
		module("data.service");
		
		inject(($injector) => {
			data$ = $injector.get("data$");
		});
	});
	
	describe("When the `immutable` package is installed", () => {
		it("the `data$` service should be available", () => {
			expect(data$).toBeDefined();
			expect(typeof data$).toBe("object");
		});
	});
});
