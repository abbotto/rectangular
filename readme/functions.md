## Functions

### Named Function Expressions

- Rectangular uses `named functions` instead of passing an `anonymous function` in as a callback.
- If a function must be anonymous, consider using an `arrow function`.

**Why use a NFE?**
- Prevents function hoisting which can lead to confusing code layout.
- Produces readable code which is easier to debug.
	- Names can be seen in stack traces, call stacks and lists of breakpoints.
- A `NFE` allows you to recursively call the function by name within the function body.
	- The name is local only to the function scope.
	- Avoids using the non-standard `arguments.callee` property.

**Example:**

	const RemoteController = function RemoteController() {
		// Logic goes here...
	};

### Immediately Invoked Function Expressions
- All AngularJS modules should be wrapped in an `Immediately Invoked Function Expression` (IIFE).
	- An `IIFE` encapsulates the module and removes variables and constants from the `global` scope.
	- This helps to prevent `name collisions`.

**Example:**

	(() => {
		"use strict";
		
		const RemoteController = function RemoteController() {
			// Logic goes here...
		};
		
		// Module goes here...
	})();