## ViewModel

A short capture variable name has been chosen and it is called `vm`, which stands for `ViewModel`.

This variable can be assigned using the `controllerAs` syntax.

The `this` keyword is contextual and when used within a function inside a controller it may change it's context.

Capturing the context of this with `vm` avoids encountering this problem.

**Example:**

	function ctrl() {
		var vm = this;
		vm.foo = {};
		vm.bar = function() { };
	}