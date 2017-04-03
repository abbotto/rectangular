"use strict";

// module lets you easily load Angular services and directives

// Example
// __.module(
//     *.service',
//     *.directive'
// )
(() => {
	__.module = function testModule() {
		module.apply(this, arguments);
	};
})();
