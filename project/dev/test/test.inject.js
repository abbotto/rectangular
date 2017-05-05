"use strict";

// inject lets you easily inject Angular deps

// Example
// __.inject("foo.service")

(() => {
	__.inject = function testInject() {
		const args = Array.prototype.slice.call(arguments);
		const deps = angular.injector(args);
		__.subject = deps.get;
	};
})();
