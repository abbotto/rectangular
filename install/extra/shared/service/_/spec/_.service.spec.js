"use strict";

describe("_.service", () => {
	let _;

	beforeEach(() => {
		__.inject(
			"lodash.extension",
			"_.service"
		);
		_ = __.subject("_");
	});

	describe("When the `lodash` extension is installed", () => {
		it("the `_` service should be available", () => {
			expect(!!_).toEqual(true);
		});
	});
});
