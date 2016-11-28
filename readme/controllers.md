## Controllers
- Controllers are used in `components` and `directives`.
- Controllers should be used for:
	- Set up the initial state of the 'ViewModel`.
	- Add behavior to the `ViewModel`
- Do not use controllers to:
	- Manipulate DOM — Controllers should contain only business logic.
	- Share code or state across controllers — Use angular services instead.
