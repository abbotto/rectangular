## Naming

### Files

### Modules
- App modules should be prefixed with `app`.
- All other modules should be prefixed by type.
	- Example: `service.public`.

### Controllers
- All controller modules are prefixed with `controller`.
- Controllers that belong in specific components should be prefixed with `controller.{{component}}`.
- Controllers should be named in `UpperCamelCase` format.

### Routes
- All route modules are prefixed with `route`.
- Routes should be named in `lowerCamelCase` format.

### Directives
- All directive modules are prefixed with `directive`.
- Directives that belong in specific components should be prefixed with `directive.{{component}}`.
- Directives should be named in `lowerCamelCase` format.

### Services
- All service modules are prefixed with `service`.
- Services that belong in specific components should be prefixed with `service.{{component}}`.
- Services should be named in `UpperCamelCase` format.
- Built-in Angular services are prefixed with `$`. To keep things concise, other services should have a suffix of `$`.
	- Built-in: `$location`.
	- Other: `Weather$`.
