"use strict";

describe("locale.service", () => {
	let locale$;

	beforeEach(() => {
		module("locale.service");

		inject(($injector) => {
			locale$ = $injector.get("locale$");
		});
	});

	describe("When the `angular-translate` extension is installed", () => {
		it("the `locale$` service should be available", () => {
			expect(locale$).toBeDefined();
		});
	});
});
