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
	- File = `service.public.js` and Module = `service.public`.
	- Naming modules this way keeps them organized within lists.

### Controllers
- Controllers should be named in `UpperCamelCase` format.

### Routes
- Routes should be named in `lowerCamelCase` format.

### Directives
- Directives should be named in `lowerCamelCase` format.

### Filters
- Filters should be named in `lowerCamelCase` format.

### Services
- Services should be named in `UpperCamelCase` format.
- Built-in Angular services are prefixed with `$`. To keep things consistant and concise, other services should have a suffix of `$`.
	- Built-in: `$location`.
	- Other: `Weather$`.
