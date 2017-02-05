## Naming

### Modules

#### Files
- Files containing a module will share a name with that module, with the exception of components.
	- `{{component}}.js`.
		- `angular.module("{{component}}.component")`.
	- `{{component}}.*.service.js`.
		- `angular.module("{{component}}.service")`.
	
#### Components
- Component module names should:
	- Be `lowerCamelCase`.
	- Follow this format: `{{component}}.*.{{type}}`.
	
### Controllers
- Controllers should be named in `UpperCamelCase` format.

### Directives
- Directives should be named in `lowerCamelCase` format.

### Filters
- Filters should be named in `lowerCamelCase` format.

### Services
- A service that is invoked with `.service()` is a `constructor` function.
	- It can be instantiated with the `new` keyword, and uses `this` for public methods and variables.
	- It should be named in `lowerCamelCase` format.
- Angular services are prefixed with `$`. To keep things consistent and concise, all other services should have a suffix of `$`.
	- Angular-style: `$service`.
	- App-style: `service$`.

#### Factories
- A `factory` is an implementation of a service that is invoked with `.factory()`.
	- It returns an object that contains the members of the service.
	- It should be named in `lowerCamelCase` format.
	
### Caveat

- Currently, there isn't an `eslint-plugin-angular` rule to enforce naming conventions on `constructor` services.
- A ticket has been created [here](https://github.com/Gillespie59/eslint-plugin-angular/issues/418) to address the problem.
- For the time being, `Rectangular` will enforce `UpperCamelCase` for all services.
	- This rule can be disabled for `non-constructor` services such as `.factory()`.
	- To disable, add the following line to the top of the service file: `/* eslint-plugin-disable angular */`