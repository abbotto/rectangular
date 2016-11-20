## Functions

Rectangular uses named functions instead of passing an anonymous function in as a callback.

This produces more readable code which also happens to be easier to debug.

If a function must be anonymous, consider using an arrow function.

**Example:**

	angular
		.module('controller.dashboard')
		.controller('Dashboard', DashboardController() { })