"use strict";

// mock lets you easily mock services using BardJS and Jasmine

// Example
// test.mock({
// 	UserNetwork: ['getCurrent'],
// 	UserOrganization: ['getOrganization']
// });
(() => {
	test.mock = function testMock(mocks) {
		const keys = Object.keys(mocks);
		let mock;
		
		// bard.inject.apply(this, keys);
		keys.forEach((service) => {
			mock = {};
			
			// Build the mock service object
			mocks[service].forEach((prop) => {
				mock[prop] = sinon.spy(service, prop);
			});

			bard.mock(service, mock);
		});
	};
})();