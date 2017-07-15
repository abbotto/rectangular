# Application

## Table of Contents

* [App Modules](#AppModules)
* [Routes](#Routes)
	* [Example](#RoutesExample)
* [Services](#Services)
* [Directives](#Directives)
* [Components](#Components)
	* [Angular Components](#AngularComponents)
	* [React Components](#ReactComponents)
* [Controllers](#Controllers)
	* [View Model](#ViewModel)
* [Templates](#Templates)
	* [Example](#TemplateIncludeExample)

## <a name='AppModules'></a>App Modules
- App Modules are registered in `app/index.js`.

## <a name='Routes'></a>Routes
Routes are pathways within the application.
- Route modules are registered in `app/route.js`.
- The structure of a route path is this: `{{component}}/{{template}}.html`.
- `ui-router` handles all the routing in Rectangular apps - you can learn more about it [here](https://github.com/angular-ui/ui-router).

### <a name='RoutesExample'></a>Example
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

## <a name='Services'></a>Services
Services are used for `sending/receiving/manipulating` data.
- You can use services to organize and share code across your app.

## <a name='Directives'></a>Directives
Directives are used to control DOM behaviour and to render data in HTML format.
- The structure of a `directive` template path is this: `{{component|directive}}/{{template}}.directive.html`.
- A `directive` should decorate, and should generally be implemented as an attribute and restricted to 'A'.

## <a name='Components'></a>Components
A component is a specialized directive that organizes a controller with a template. One main difference between a component and a directive is that a component doesn't have a `link` function.
- A `component` is restricted to 'E' by default, meaning custom element.
- For DOM decoration, a component can use directives.
- Relevant files are placed in the `app/component/{{componentName}}` directory:
	- **Components** (js)
	- **Directives** (js)
	- **Templates** (html)
	- **Routes** (js)
	- **Services** (js)
	- **Tests** (js)
	- **Styles** (scss)
	- **Models** ([data|mixin]json)
	- **Images** (bmp, gif, ico, jpeg, jpg, png, svg)

### <a name='AngularComponents'></a>Angular Components
#### Example
A simple Angular component may resemble the following:

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

### <a name='ReactComponents'></a>React Components
React components can be rendered within Angular components.

#### Example
A simple React component may resemble the following:

	(() => {
		// --------------------------------
		// ReactJS Component
		// --------------------------------
		const TodoListComponent = function TodoListComponent(
			component$,
			vm,
			data$
		) {
			vm.TodoList = {};
			vm.TodoList.alias = "vm";
			vm.TodoList.templateUrl = "home/TodoList.jsx";
			
			// Immutable todo list
			vm.TodoList.todo = data$.fromJS([
				"get groceries",
				"mow the lawn",
				"be a ninja"
			]);
			
			// Updated by TodoList parent (HomeComponentController)
			vm.newTodoListItem = "";
			
			// Called by TodoList parent (HomeComponentController)
			vm.updateTodoList = () => {
				if (vm.newTodoListItem.length) {
					vm.TodoList.todo = vm.TodoList.todo.push(vm.newTodoListItem);
				}
				
				// Render the TodoList component
				component$.render("TodoList", vm.TodoList);
			};
			
			vm.updateTodoList();
		};

		// --------------------------------
		// AngularJS Component
		// --------------------------------
		...
	})();

## <a name='Controllers'></a>Controllers
Controllers are used in both components and directives.

- Controllers should be used for:
	- Setting up the initial state of the View Model.
	- Adding behavior to the View Model.

- Do not use controllers:
	- For anything other than business logic.
	- To share code or state across controllers — use services instead.

### <a name='ViewModel'></a>View Model
- A short capture variable called `vm` is generally used for the `View Model` object.
- The `this` keyword is contextual and when used within a function inside a controller it may change it's context.
- Capturing the context of this with `vm` avoids encountering this problem.
- The `vm` variable is assigned using the `controllerAs` syntax.

## <a name='Templates'></a>Templates
- The structure of a template path is this: `{{component}}/{{template}}.html`.

### <a name='TemplateIncludeExample'></a>Example

	<ng-include src="'{{component}}/{{template}}.html'"></ng-include>
