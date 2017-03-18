"use strict";

// inject lets you easily inject Angular dependencies using BardJS

// Example
// test.inject(
//     'arg1', /* global arg1 */
//     'arg2', /* global arg2 */
//     'arg3' /* global arg3 */
// )
test.inject = function inject() {
	require("bardjs").inject.apply(this, arguments);
};
