"use strict";

import DateService from "app/extension/date/date.service.js";
let date$;

describe("date.service", () => {
	beforeEach(() => {
		date$ = DateService;
	});

	describe("When the `moment` package is installed", () => {
		it("the `date$` service should be available", () => {
			expect(date$).toBeDefined();
			expect(typeof date$).toBe("object");
		});
	});
});
