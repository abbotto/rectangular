"use strict";

describe("promise.service", () => {
	let promise$;

	beforeEach(() => {
		module("promise.service");
		inject(($injector) => {
			promise$ = $injector.get("promise$");
		});
	});
	
	describe("When the `bluebird` extension is installed", () => {
		it("the `promise$` service should be available", () => {
			expect(promise$).toBeTruthy();
		});
	});
});
