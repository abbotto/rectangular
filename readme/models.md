## Models
- Models should be stored in `JSON` format.
- Models can be accessed via the `model.service` module and injected via `model$`.
- A model can be accessed like this:
	- `model$[{{model}}.json]`.
	- `model$[{{component}}/{{model}}.json]`.

### Data Models
- `Data models` contain data that is meant to be represented `as is`.
- `Global data models` should be stored in the `app/shared/model` directory.
- `Component data models` should be stored in the directory of the component that uses it.

### Mixin Models
- `Mixin models` contain data that is meant to be `mixed` with other data.
- `Global mixins` should be stored in the `app/shared/model` directory.
- `Component mixins` should be stored in the directory of the component that uses it.
- Mixins can be accessed and mixed via the `mixin.service` module and injected via `mixin$`.
- A mixin can be used like this: `mixin$("example.mixin.json", [obj1, obj2, objN, ...])`.
	- For a `deep mixin`, add a third parameter when using `mixin$` and set it to `true`.
		- `mixin$("example.mixin.json", [obj1, obj2, objN, ...], true)`.