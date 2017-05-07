"use strict";

describe("date.service", () => {
	let date$;
	
	beforeEach(() => {
		__.inject("date.service");
		date$ = __.subject("date$");
	});

	describe("When `momentjs` extension is installed", () => {
		it("the `date$` service should be available", () => {
			expect(!!date$).toEqual(true);
		});
	});
});
