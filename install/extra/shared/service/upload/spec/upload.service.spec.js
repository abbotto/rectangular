"use strict";

describe("upload.service", () => {
	let upload$;
	
	beforeEach(() => {
		__.inject(
			"ngFileUpload.extension",
			"upload.service"
		);
		upload$ = __.subject("upload$");
	});

	describe("When the `ng-file-upload` extension is installed", () => {
		it("the `upload$` service should be available", () => {
			expect(!!upload$).toEqual(true);
		});
	});
});
