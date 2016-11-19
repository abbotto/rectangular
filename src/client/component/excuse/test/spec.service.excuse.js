"use strict";

describe("Excuse$", function TestExcuseService() {

	let Excuse$;
	
	// Mock the service
	beforeEach(angular.mock.module("service.excuse"));

	// Assign the service
	beforeEach(angular.mock.inject(function InjectExcuseService(_Excuse$_) {
		Excuse$ = sinon.stub(_Excuse$_, function Excuse$Stub() {
			return "this.is.an.excuse";
		});
	}));

	it("should be a string", () => {
		const excuse = Excuse$();
		console.log(excuse);
		expect(!!excuse.substring).to.equal(true);
	});

	// it("should return an excuse", () => {
	// 	expect(Excuse$()).toEqual("this.is.an.excuse");
	// });
});
