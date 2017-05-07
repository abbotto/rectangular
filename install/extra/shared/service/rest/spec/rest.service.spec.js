"use strict";

describe("rest.service", () => {
	let rest$;
	
	beforeEach(() => {
		__.inject(
			"restangular.extension",
			"rest.service"
		);
		rest$ = __.subject("rest$");
	});

	describe("When the `restangular` extension is installed", () => {
		it("the `rest$` service should be available", () => {
			expect(!!rest$).toEqual(true);
		});
	});
});
