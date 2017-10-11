"use strict";

import ChartService from "~/app/extension/chart/chart.service.js";
let chart$;

describe("chart.service", () => {
	beforeEach(() => {
		chart$ = ChartService;
	});

	describe("When the `d3` package is installed", () => {
		it("the `chart$` service should be available", () => {
			expect(chart$).toBeDefined();
			expect(typeof chart$).toBe("object");
		});
	});
});
