"use strict";

import PrintService from "app/extension/print/print.service.js";
let print$;

describe("print.service", () => {
	beforeEach(() => {
		print$ = PrintService;
	});

	describe("When the `teleprint` package is installed", () => {
		it("the `print$` service should be available", () => {
			expect(print$).toBeDefined();
			expect(typeof print$).toBe("function");
		});
	});
});
