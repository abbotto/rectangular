"use strict";

import RestService from "app/extension/rest/rest.service.js";
let rest$;

describe("rest.service", () => {
	beforeEach(() => {
		rest$ = RestService;
	});

	describe("When the `restangular` package is installed", () => {
		it("the `rest$` service should be available", () => {
			expect(rest$).toBeDefined();
			expect(typeof rest$).toBe("object");
		});
	});
});
