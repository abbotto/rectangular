"use strict";

describe("print.service", () => {
	let print$;
	
	beforeEach(() => {
		module("print.service");
		
		inject(($injector) => {
			print$ = $injector.get("print$");
		});
	});
	
	describe("When the `teleprint` package is installed", () => {
		it("the `print$` service should be available", () => {
			expect(print$).toBeDefined();
			expect(typeof print$).toBe("function");
		});
	});
});
