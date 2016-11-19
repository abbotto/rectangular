## Naming

### Files
- Naming modular files in the following way keeps them organized within lists:
	- Controllers: `controller.{{component}}.js`
	- Routes: `route.{{component}}.js`
	- Directives: `directive.{{component}}.js`
	- Services: `service.{{component}}.js`

### Modules
- App modules should be prefixed with `app`.
- All other modules should follow a pattern similar to their file name.
	- File = `service.component.js` and Module = `service.component`.
	- Naming modules this way keeps them organized within lists.

### Controllers
- Controllers should be named in `UpperCamelCase` format.
- Controllers are `constructor` functions.

### Directives
- Directives should be named in `lowerCamelCase` format.

### Filters
- Filters should be named in `lowerCamelCase` format.

### Services
- All services are singletons.
- A service that is invoked with `.service()` is a `constructor` function.
- A service that is invoked with `.service()` can be instantiated with the `new` keyword, and uses `this` for public methods and variables.
- A service that is invoked with `.service()`  should be named in `UpperCamelCase` format.
- Built-in Angular services are prefixed with `$`. To keep things consistent and concise, all other services should have a suffix of `$`.
	- Built-in: `$location`.
	- Other: `Weather$`.

#### Factories
- Factories return an object that contains the members of the service.
- A factory is an implementation of a service that is invoked with `.factory()`.
- A factory should be named in `lowerCamelCase` format.


#### Caveat
- Currently, there isn't an `eslint-plugin-angular` rule to enforce naming conventions on `constructor` services.
- A ticket has been created [here](https://github.com/Gillespie59/eslint-plugin-angular/issues/418) to address the problem.
- For the time being, `Rectangular` will enforce `UpperCamelCase` for all services.
- You can disable this rule for `non-constructor` services such as `.factory()` by add the following line to the top of the file:
	- `/* eslint-plugin-disable angular */`
	
Services are instantiated with the new keyword, use this for public methods and variables.