## Functions

Rectangular uses named functions instead of passing an anonymous function in as a callback.

This produces more readable code, is much easier to debug, and reduces the amount of nested callback code.

**Example:**

	angular
		.module('controller.dashboard')
		.controller('Dashboard', DashboardController() { })