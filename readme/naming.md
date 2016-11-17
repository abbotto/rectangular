## Naming

### Files
- Naming files in the following way keeps them organized within lists:
	- Controllers: `controller.{{component}}.js`
	- Routes: `route.{{component}}.js`
	- Directives: `directive.{{component}}.js`
	- Services: `service.{{component}}.js`

### Modules
- App modules should be prefixed with `app`.
- All other modules should follow a pattern similar to their file name.
	- Example: File = `service.public.js` and Module = `service.public`.
	- Naming modules this way keeps them organized within lists.

### Controllers
- All controller modules are prefixed with `controller`.
- Controllers should be named in `UpperCamelCase` format.

### Routes
- All route modules are prefixed with `route`.
- Routes should be named in `lowerCamelCase` format.

### Directives
- All directive modules are prefixed with `directive`.
- Directives should be named in `lowerCamelCase` format.

### Services
- All service modules are prefixed with `service`.
- Services should be named in `UpperCamelCase` format.
- Built-in Angular services are prefixed with `$`. To keep things concise, other services should have a suffix of `$`.
	- Built-in: `$location`.
	- Other: `Weather$`.
