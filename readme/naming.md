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
- Services that are created with `.service` should be named in `UpperCamelCase` format.
- Services that are created with `.service` are `constructor` functions.
- Services that are created with `.factory` should be named in `lowerCamelCase` format.
- Built-in Angular services are prefixed with `$`. To keep things consistant and concise, all other services should have a suffix of `$`.
	- Built-in: `$location`.
	- Other: `Weather$`.