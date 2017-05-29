"use strict";

import PromiseService from "app/extension/promise/promise.service.js";
let promise$;

describe("promise.service", () => {
	beforeEach(() => {
		promise$ = PromiseService;
	});

	describe("When the `bluebird` package is installed", () => {
		it("the `promise$` service should be available", () => {
			expect(promise$).toBeDefined();
			expect(typeof promise$).toBe("object");
		});
	});
});
