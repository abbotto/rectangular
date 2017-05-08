"use strict";

describe("upload.service", () => {
	let upload$;

	beforeEach(() => {
		module("upload.service");

		inject(($injector) => {
			upload$ = $injector.get("upload$");
		});
	});

	describe("When the `ng-file-upload` extension is installed", () => {
		it("the `upload$` service should be available", () => {
			expect(upload$).toBeDefined();
		});
	});
});
