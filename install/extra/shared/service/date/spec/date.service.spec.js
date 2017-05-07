"use strict";

describe("date.service", () => {
	let date$;

	beforeEach(() => {
		module("date.service");
		inject(($injector) => {
			date$ = $injector.get("date$");
		});
	});
	
	describe("When the `moment` extension is installed", () => {
		it("the `date$` service should be available", () => {
			expect(date$).toBeTruthy();
		});
	});
});
