"use strict";

describe("Excuse$", function TestExcuseService() {

	let Excuse$;
	
	// Mock the service
	beforeEach(angular.mock.module("app"));
	beforeEach(angular.mock.module("service.excuse"));

	// Assign the service
	beforeEach(angular.mock.inject(function InjectExcuseService(_Excuse$_) {
		Excuse$ = _Excuse$_;
	}));

	it("should exist", () => {
		const excuse = Excuse$();
		expect(!!excuse.substring).to.equal(true);
	});

	// it("should return an excuse", () => {
	// 	expect(Excuse$()).toEqual("this.is.an.excuse");
	// });
});
