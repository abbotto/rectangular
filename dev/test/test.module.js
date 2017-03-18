"use strict";

// module lets you easily load Angular services and directives

// Example
// test.module(
//     *.service',
//     *.directive'
// )
(() => {
	test.module = function testModule() {
		module.apply(this, arguments);
	};
})();
