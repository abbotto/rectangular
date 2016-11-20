## Components
- Components should have a functional purpose.
- Components can be as simple as a service or they can be comprised of many related parts.
- Component files are organized in directories comprised of any or all of the following types:
	- **Directives** (js, tpl)
	- **Views** (js, tpl)
	- **Routes** (js)
	- **Services** (js)

### Component Assets
- Component asset files are kept in component directories and are comprised of any or all of the following types:
	- **Tests** (js)
	- **Styles** (scss)
	- **Models** ([data|mixin]json)
	- **Images** (png, jpg, jpeg, gif, svg, ico)

### Component Views
- Component views are special `directives` for rendering `views`.
- You can read more about component patterns for AngularJS [here](https://www.airpair.com/angularjs/posts/component-based-angularjs-directives) and [here](http://busypeoples.github.io/post/thinking-in-components-angular-js/).
- You can read more about the `no-controller` rule [here](https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-controller.md).

#### View Model
- A short capture variable name has been chosen and it is called `vm`, which stands for `ViewModel`.
- This variable is assigned using the `controllerAs` syntax.
- The `this` keyword is contextual and when used within a function inside a controller it may change it's context.
- Capturing the context of this with `vm` avoids encountering this problem.

##### View Model Example

	function Ctrl() {
		var vm = this;
		vm.foo = {};
		vm.bar = function() { };
	}

##### Component Views: Directives and Routes Example
- A simple component view `directive` may resemble the following:

		(() => {
			"use strict";
			
			// --------------------------------
			// Model for view directive
			// --------------------------------
			let view = {};
			view.templateUrl = "home/home.view.tpl";
			
			// --------------------------------
			// Controller and ViewModel
			// --------------------------------
			view.controller = function HomeController($log) {
				const vm = this;
				vm.foo = {};
				vm.bar = function() { };
			};
			
			// --------------------------------
			// View module
			// --------------------------------
			angular.module("home.view", [
				"mixin.service"
			])
			.directive("home", function homeView(mixin$) {
				// Set defaults for view.link
				view = mixin$("view.mixin.json", [view]);
				return view;
			});
		})();

- The component view `route` would look like this:

		(() => {
			"use strict";
			
			angular
			.module("home.route", [
				"home.view"
			])
			.config($routeProvider => {
				$routeProvider
				.when("/", {
					"template": "<home></home>"
				});
			});
		})();
