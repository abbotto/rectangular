## Components
- Components are comprised of the following:
	- A `component directive`.
	- A `template`'
	- An optional 'route'.
- Components can also contiain their own `directives` and `services`.
- Component files are placed in the `src/client/component/{{componentName}}` directory:
	- **Directives** (js)
	- **Templates** (tpl)
	- **Routes** (js)
	- **Services** (js)

### Component Assets
- Component asset files are also placed in the `src/client/component/{{componentName}}` directory:
	- **Tests** (js)
	- **Styles** (scss)
	- **Models** ([data|mixin]json)
	- **Images** (png, jpg, jpeg, gif, svg, ico)

### View Model
- A short capture variable name has been chosen and it is called `vm`, which stands for `ViewModel`.
- This variable is assigned using the `controllerAs` syntax.
- The `this` keyword is contextual and when used within a function inside a controller it may change it's context.
- Capturing the context of this with `vm` avoids encountering this problem.

#### Component View Example
- A simple `component directive` may resemble the following:

		(() => {
			"use strict";
			
			// --------------------------------
			// Settings for view directive
			// --------------------------------
			let view = {};
			view.templateUrl = "home/home.view.tpl";
			
			// --------------------------------
			// Controller and ViewModel
			// --------------------------------
			view.controller = function HomeController() {
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
			.component("home", function homeView(mixin$) {
				// Set defaults for view.link
				view = mixin$("view.mixin.json", [view]);
				return view;
			});
		})();
