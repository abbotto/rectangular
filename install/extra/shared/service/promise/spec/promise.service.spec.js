"use strict";

describe("promise.service", () => {
	let promise$;
	
	beforeEach(() => {
		__.inject("promise.service");
		promise$ = __.subject("promise$");
	});

	describe("When `bluebird` extension is installed", () => {
		it("the `promise$` service should be available", () => {
			expect(!!promise$).toEqual(true);
		});
	});
});
