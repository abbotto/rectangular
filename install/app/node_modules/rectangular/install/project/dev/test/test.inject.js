"use strict";

// easily inject Angular deps in tests

// Example
// __.inject("foo.service")

(() => {
	__.inject = function testInject() {
		const args = Array.prototype.slice.call(arguments);
		const deps = angular.injector(args);
		__.subject = deps.get;
	};
})();
