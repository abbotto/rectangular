# Conventions

## Table of Contents

* [Naming Structure](#NamingStructure)
	* [Modules](#Modules)
	* [Components](#Components)
* [Directives](#Directives)
* [Components](#Components)
	* [Angular Components](#AngularComponents)
	* [React Components](#ReactComponents)
* [Controllers](#Controllers)
	* [View Model](#ViewModel)
* [Templates](#Templates)
	* [Example](#TemplateIncludeExample)

### <a name='NamingStructure'></a>Naming Structure

#### <a name='Modules'></a>Modules
- Files containing a module will share a name with that module:
	- `componentName.component.js`.
		- `angular.module("componentName.component")`.
	- `componentName.*.controller.js`.
		- `angular.module("ComponentName.controller")`.
	- `componentName.*.service.js`.
		- `angular.module("componentName.service")`.
	- `componentName.*.route.js`.
		- `angular.module("componentName.route")`.

#### <a name='Components'></a>Components
- Component module names should be `lowerCamelCase`.
- Files related to components files should be prefixed with the component name:
	- `componentName.*.service.js`
	- `componentName.*.html`.
	- `componentName.*.scss`.

#### <a name='Controllers'></a>Controllers
- Controllers should be named in `UpperCamelCase` format.

#### <a name='Directives'></a>Directives
- Directives should be named in `lowerCamelCase` format.

#### <a name='Filters'></a>Filters
- Filters should be named in `lowerCamelCase` format.

#### <a name='Services'></a>Services
- A service that is invoked with `.service()` is a `constructor` function.
	- It can be instantiated with the `new` keyword, and uses `this` for public methods and variables.
	- It should be named in `lowerCamelCase` format.
- Angular services are prefixed with `$`. To keep things consistent and concise, all custom services with `alphanumeric` names should have a suffix of `$`.
	- Angular-style: `$service`.
	- Custom-style: `service$`.

##### <a name='Factories'></a>Factories
- A `factory` is an implementation of a service that is invoked with `.factory()`.
	- It returns an object that contains the members of the service.
	- It should be named in `lowerCamelCase` format.

##### <a name='Caveat'></a>Caveat
- Currently, there isn't an `eslint-plugin-angular` rule to enforce naming conventions on `constructor` services.
- A ticket has been created [here](https://github.com/Gillespie59/eslint-plugin-angular/issues/418) to address the problem.
- For the time being, `Rectangular` will enforce `UpperCamelCase` for all services.
	- This rule can be disabled for `non-constructor` services such as `.factory()`.
	- To disable, add the following line to the top of the service file: `/* eslint-plugin-disable angular */`

### <a name='Functions'></a>Functions

#### <a name='NamedFunctionExpressions'></a>Named Function Expressions
- It's preferable to use `named functions` instead of passing an `anonymous function` in as a callback.
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
