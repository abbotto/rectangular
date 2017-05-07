# Table of Contents

* 1. [App Modules](#AppModules)
* 2. [Routes](#Routes)
	* 2.1. [Routes Example](#RoutesExample)
* 3. [Services](#Services)
* 4. [Directives](#Directives)
* 5. [Components](#Components)
	* 5.1. [Component Assets](#ComponentAssets)
	* 5.2. [View Model](#ViewModel)
		* 5.2.1. [Component Example](#ComponentExample)
* 6. [Controllers](#Controllers)
* 7. [Templates](#Templates)
	* 7.1. [Template Include Example](#TemplateIncludeExample)

##  1. <a name='AppModules'></a>App Modules
- App Modules are registered in `app/app.module.js`.

##  2. <a name='Routes'></a>Routes
Routes are used to guide the users throughout the application.
- Route modules are registered in `app/app.route.js`.
- The structure of a route path is this: `{{component}}/{{template}}.html`.
- Learn more about `ui-router` [here](https://github.com/angular-ui/ui-router).

###  2.1. <a name='RoutesExample'></a>Routes Example
- A route looks something like this:

		(() => {
			angular
			.module("home.route", [
				"home.component"
			])
			.config(($stateProvider) => {
				$stateProvider
					.state("home", {
						"url": "/",
						"template": "<home></home>"
					})
				;
			});
		})();

##  3. <a name='Services'></a>Services
Services are used for `sending/receiving/manipulating` data.
- You can use services to organize and share code across your app.

##  4. <a name='Directives'></a>Directives
Directives are used to control DOM behaviour and to render data in HTML format.
- The structure of a `directive` template path is this: `{{component}}/{{template}}.directive.html`.

##  5. <a name='Components'></a>Components
A component is a specialized directive that organizes a controller with a template. One main difference between a component and a directive is that a component doesn't have a `link` function. For DOM manipulation, a component can use directives with a link function.

- Components are comprised of the following:
	- A JS component with a controller.
	- A HTML template.
- Components can also contiain their own directives, services and styles.
- Component files are placed in the `app/component/{{componentName}}` directory:
	- **Components** (js)
	- **Directives** (js)
	- **Templates** (html)
	- **Routes** (js)
	- **Services** (js)

###  5.1. <a name='ComponentAssets'></a>Component Assets
Assets are also placed in the `app/component/{{componentName}}` directory:
- **Tests** (js)
- **Styles** (scss)
- **Models** ([data|mixin]json)
- **Images** (png, jpg, jpeg, gif, svg, ico)

###  5.2. <a name='ViewModel'></a>View Model
- A short capture variable called `vm` is generally used for the `View Model` object.
- The `this` keyword is contextual and when used within a function inside a controller it may change it's context.
- Capturing the context of this with `vm` avoids encountering this problem.
- The `vm` variable is assigned using the `controllerAs` syntax.

####  5.2.1. <a name='ComponentExample'></a>Component Example
A simple component directive may resemble the following:

		(() => {
			const options = {};
			
			options.templateUrl = "home/home.component.html";
			options.controllerAs = "vm";
			
			options.controller = function HomeController() {
				const vm = this;
			};
			
			angular
				.module("home.component", [])
				.component("home", options)
			;
		})();

##  6. <a name='Controllers'></a>Controllers
Controllers are used in components and directives.

- Controllers should be used for:
	- Setting up the initial state of the View Model.
	- Adding behavior to the View Model.

- Do not use controllers:
	- For anything other than business logic.
	- To share code or state across controllers — use services instead.

##  7. <a name='Templates'></a>Templates
- The structure of a template path is this: `{{component}}/{{template}}.html`.

###  7.1. <a name='TemplateIncludeExample'></a>Template Include Example

	<ng-include src="'{{component}}/{{template}}.html'"></ng-include>
