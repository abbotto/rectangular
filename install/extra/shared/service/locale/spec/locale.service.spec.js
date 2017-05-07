"use strict";

describe("locale.service", () => {
	let locale$;
	
	beforeEach(() => {
		__.inject(
			"angularTranslate.extension",
			"locale.service"
		);
		locale$ = __.subject("locale$");
	});

	describe("When the `angular-translate` extension is installed", () => {
		it("the `locale$` service should be available", () => {
			expect(!!locale$).toEqual(true);
		});
	});
});
