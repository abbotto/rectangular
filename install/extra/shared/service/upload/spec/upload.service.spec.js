"use strict";

describe("upload.service", () => {
	let upload$;
	
	beforeEach(() => {
		__.inject("upload.service");
		upload$ = __.subject("upload$");
	});

	describe("When `ng-file-upload` extension is installed", () => {
		it("the `upload$` service should be available", () => {
			expect(!!upload$).toEqual(true);
		});
	});
});
