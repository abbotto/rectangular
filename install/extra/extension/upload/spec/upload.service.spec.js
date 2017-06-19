"use strict";

import UploadService from "app/extension/upload/upload.service.js";
let upload$;

describe("upload.service", () => {
	beforeEach(() => {
		upload$ = UploadService;
	});

	describe("When the `ng-file-upload` package is installed", () => {
		it("the `upload$` service should be available", () => {
			expect(upload$).toBeDefined();
			expect(typeof upload$).toBe("function");
		});
	});
});
