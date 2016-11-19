## Functions

Rectangular uses named functions instead of passing an anonymous function in as a callback.

This produces more readable code, is much easier to debug, and reduces the amount of nested callback code.

If a function must be anonymous, consider using an arrow function.

**Example:**

	angular
		.module('controller.dashboard')
		.controller('Dashboard', DashboardController() { })