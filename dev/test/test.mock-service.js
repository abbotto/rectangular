"use strict";

// mockService lets you easily mock services using BardJS and Jasmine

// Example
// test.mockService({
// 	ServiceUserNetwork: ['getCurrent'],
// 	ServiceUserOrganization: ['getOrganization']
// });
(() => {
	test.mockService = function testMockService(mocks) {
		const keys = Object.keys(mocks);
		const bard = require("bardjs");
		let mock;
		
		bard.inject.apply(this, keys);
		keys.forEach((service) => {
			mock = {};
			
			// Build the mock service object
			mocks[service].forEach((prop) => {
				mock[prop] = sinon.spy(service, prop);
			});

			bard.mockService(service, mock);
		});
	};
})();