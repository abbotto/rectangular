"use strict";

describe("date.service", () => {
	let date$;
	
	beforeEach(() => {
		__.inject(
			"moment.extension",
			"date.service"
		);
		date$ = __.subject("date$");
	});

	describe("When the `moment` extension is installed", () => {
		it("the `date$` service should be available", () => {
			expect(!!date$).toEqual(true);
		});
	});
});
