"use strict";

// fakes lets you easily mock Angular deps

// Example
// __.fake(
//     svc1,
//     svc2,
//     svc3
// )
(() => {
	__.fake = function testFake(provider, m0dule, name, mock) {
		__.module(m0dule, ($provide) => {
			$provide[provider](name, mock);
		});
	};
})();
