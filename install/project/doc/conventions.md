# Conventions

## Table of Contents

* [File Structure](#FileStructure)
* [Naming Structure](#NamingStructure)
	* [Modules](#Modules)
	* [Components](#Components)
	* [Controllers](#Controllers)
	* [Directives](#Directives)
	* [Filters](#Filters)
	* [Services](#Services)
		* [Constructors](#Constructors)
		* [Factories](#Factories)
* [Function Structure](#FunctionStructure)
	* [Named Function Expressions](#NamedFunctionExpressions)

## <a name='FileStructure'></a> File Structure
- Basically, files are organized according to what they are used for and folders are kept as flat as possible.
	- For example, the `home` component is located here: `app/component/home/`.
	- Component-specific directives, services, models, view, route, and styles are all kept in the same directory inside of `app/component`.
	- Global modules can go in the `app/extension` folder.
	- Global models can go in the `app/model` folder.
	- Global styles, fonts and images can go in the `app/design` folder.

## <a name='NamingStructure'></a>Naming Structure
### <a name='Modules'></a>Modules
- Files containing a module will share a name with that module:
	- `angular.module("componentName.component")` => `componentName.component.js`.
	- `angular.module("ComponentName.controller")` => `componentName.controller.js`.
	- `angular.module("componentName.service")` => `componentName.service.js`.
	- `angular.module("componentName.route")` => `componentName.route.js`.

### <a name='Components'></a>Components
- Component module names should be `lowerCamelCase`.
- Files related to components should be prefixed with the component name:
	- `componentName.*.service.js`
	- `componentName.*.html`.
	- `componentName.*.scss`.

### <a name='Controllers'></a>Controllers
- Controllers should be named in `UpperCamelCase` format.
- This provides a consistent way to identify and reference controllers without using the `Controller/Ctrl` suffix.

### <a name='Directives'></a>Directives
- Directives should be named in `lowerCamelCase` format.

### <a name='Filters'></a>Filters
- Filters should be named in `lowerCamelCase` format.

### <a name='Services'></a>Services
#### <a name='Constructors'></a>Constructors
- A service that is invoked with `.service()` is a `constructor` function.
	- Constuctor services are compatible with ES6 classes.
	- Under the hood, they are instantiated with the `new` keyword.
	- They use `this` for public methods and variables.
	- The service names should be in `lowerCamelCase` format.
- Angular service names are prefixed with `$`. To keep things consistent and concise, all custom service names with `alphanumeric` characters should have a suffix of `$`.
	- Angular-style: `$service`.
	- Custom-style: `service$`.

#### <a name='Factories'></a>Factories
- A `factory` is an implementation of a service that is invoked with `.factory()`.
	- Factories should be used in cases where a service is required but an ES6 class is not.
		- For example, you would use a factory if you want to return a `closure` in order to expose a function call.
	- It returns an object that contains the members of the service.
	- The factory names should be in `lowerCamelCase` format.

## <a name='FunctionStructure'></a>Function Structure
### <a name='NamedFunctionExpressions'></a>Named Function Expressions
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
	