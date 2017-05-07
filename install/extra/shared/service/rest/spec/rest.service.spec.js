"use strict";

describe("rest.service", () => {
	let rest$;
	
	beforeEach(() => {
		__.inject("rest.service");
		rest$ = __.subject("rest$");
	});

	describe("When `restangular` extension is installed", () => {
		it("the `rest$` service should be available", () => {
			expect(!!rest$).toEqual(true);
		});
	});
});
