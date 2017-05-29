"use strict";

import LocaleService from "app/extension/locale/locale.service.js";
let locale$;

describe("locale.service", () => {
	beforeEach(() => {
		locale$ = LocaleService;
	});

	describe("When the `angular-translate` package is installed", () => {
		it("the `locale$` service should be available", () => {
			expect(locale$).toBeDefined();
			expect(typeof locale$).toBe("object");
		});
	});
});
