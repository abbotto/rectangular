# App Modules
- App Modules are registered in `app/app.module.js`.

# Routes
- Route modules are registered in `app/app.route.js`.
- `Routes` are used to guide the users throught the application.
- The structure of a route path is this: `{{component}}/{{template}}.html`.
- Learn more about `ui-router` [here](https://github.com/angular-ui/ui-router).

## Example
- A `route` looks something like this:

		(() => {
			"use strict";
			
			angular
			.module("home.route", [
				"home.component"
			])
			.config($stateProvider => {
				$stateProvider
				.state("home", {
					"url": "/",
					"template": "<home></home>"
				});
			});
		})();

# Services
- `Services` are used for sending/receiving/manipulating data.
- You can use services to organize and share code across your app.

# Directives
- Directives are used to control DOM behaviour and to render data in HTML format.
- The structure of a directive template path is this: `{{component}}/{{template}}.directive.html`.

# Controllers
- Controllers are used in `components` and `directives`.
- Controllers should be used for:
	- Set up the initial state of the 'View Model`.
	- Add behavior to the `View Model`.
- Do not use controllers:
	- For anything other than business logic.
	- To share code or state across controllers — Use services instead.

# Components
- Components are comprised of the following:
	- A `component` directive.
	- A component `template`
	- An optional `route`.
- Components can also contiain their own `directives` and `services`.
- Component files are placed in the `app/component/{{componentName}}` directory:
	- **Components** (js)
	- **Directives** (js)
	- **Templates** (html)
	- **Routes** (js)
	- **Services** (js)

## Component Assets
- Component asset files are also placed in the `app/component/{{componentName}}` directory:
	- **Tests** (js)
	- **Styles** (scss)
	- **Models** ([data|mixin]json)
	- **Images** (png, jpg, jpeg, gif, svg, ico)

## View Model
- A short capture variable name has been chosen and it is called `vm`, which stands for `ViewModel`.
- This variable is assigned using the `controllerAs` syntax.
- The `this` keyword is contextual and when used within a function inside a controller it may change it's context.
- Capturing the context of this with `vm` avoids encountering this problem.

### Component View Example
- A simple `component` directive may resemble the following:

		(() => {
			"use strict";
			
			// Options
			const options = {};
			
			// Template
			options.templateUrl = "home/home.component.html";
			
			// Controller and ViewModel
			options.controllerAs = "vm";
			options.controller = function HomeController() {
				const vm = this;
			};
			
			// Register the component
			angular.module("home.component", []).component("home", options);
		})();

## Templates
- The structure of a template path is this: `{{component}}/{{template}}.html`.

### Template Example

	<ng-include src="'{{component}}/{{template}}.html'"></ng-include>
