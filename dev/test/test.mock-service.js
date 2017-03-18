"use strict";

// mockService lets you easily mock services using BardJS and Jasmine

// Example
// test.mockService({
// 	ServiceUserNetwork: ['getCurrent'],
// 	ServiceUserOrganization: ['getOrganization']
// });

test.mockService = function MockService(mocks) {
	const keys = Object.keys(mocks);
	const bard = require('bardjs');
	bard.inject.apply(this, keys);
	
	keys.forEach((service) => {
		let mock = {};
		
		// Build the mock service object
		mocks[service].forEach((prop) => {
			mock[prop] = jasmine.createSpy(service + '.' + prop);
		});
		
		bard.mockService(service, mock);
	});
};
