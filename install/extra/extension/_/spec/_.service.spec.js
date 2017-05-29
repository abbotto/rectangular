"use strict";

import LodashVendorService from "app/extension/_/_.service.js";
let _;

describe("_.service", () => {
	beforeEach(() => {
		_ = LodashVendorService;
	});

	describe("When the `lodash` package is installed", () => {
		it("the `_` service should be available", () => {
			expect(_).toBeDefined();
			expect(typeof _).toBe("function");
		});
	});
});
