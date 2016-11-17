## The Registry
- The registry is used for setting up configs and registering:
	- Controllers
	- Routes
	- Directives
	- Services


### App Modules
- App Modules are registered in `src/client/registry/module.app.js`.
- All app modules are prefixed with `app`.

---

### Services
- Services are used for sending/receiving and manipulating data.
- Global service modules are registered in `src/client/registry/module.service.js`.
- All service modules are prefixed with `service`.
- Services that belong in specific components should be prefixed with `service.{{component}}`.
- Services should be named in `UpperCamelCase` format.
- Built-in Angular services are prefixed with `$`. To keep things concise, other services should have a suffix of `$`.
	- Built-in: `$location`.
	- Other: `Weather$`.

---

### Controllers
- Controllers are used for pulling/pushing data to/from services and other means.
- Controller modules are registered in `src/client/registry/module.controller.js`.
- All controller modules are prefixed with `controller`.
- Controllers should be named in `UpperCamelCase` format.

#### ViewModel

##### controllerAs syntax with vm

A consistent capture variable name has been chosen and it is called `vm`, which stands for `ViewModel`.

The `this` keyword is contextual and when used within a function inside a controller it may change it's context.

Capturing the context of this avoids encountering this problem.

**Example:**

	function ctrl() {
		var vm = this;
		vm.foo = {};
		vm.bar = function() { };
	}

---

### Directives
- Directives are used to control DOM behaviour and to render data in HTML format.
- Global directive modules are registered in `src/client/registry/directive.module.js`.
- The structure of a directive template path is this: `{{component}}/directive.{{template}}.tpl`.
- All directive modules are prefixed with `directive`.
- Directives should be named in `lowerCamelCase` format.

---

### Routes
- Route modules are registered in `src/client/registry/route.module.js`.
- The structure of a route path is this: `{{component}}/{{template}}.tpl`.
- All route modules are prefixed with `route`.