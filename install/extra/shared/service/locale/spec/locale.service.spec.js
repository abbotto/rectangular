"use strict";

describe("locale.service", () => {
	let locale$;
	
	beforeEach(() => {
		__.inject("locale.service");
		locale$ = __.subject("locale$");
	});

	describe("When `angular-translate` extension is installed", () => {
		it("the `locale$` service should be available", () => {
			expect(!!locale$).toEqual(true);
		});
	});
});
