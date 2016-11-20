## Components
- Components should have a functional purpose.
- Components can be as simple as a service or they can be comprised of many related parts.

- Components are organized in directories comprised of any or all of the following files:
	- Directives (js, tpl)
	- Views (js, tpl)
	- Routes (js)
	- Services (js)

### Component Assets
- Asset files are comprised of any or all of the following types:
	- Tests (js)
	- Styles (scss)
	- Models ([data|mixin]json)
	- Images (png, jpg, jpeg, gif, svg, ico)
	
### Component Views
- Component views are special `directives` for rendering `views`.
- A simple component view may resemble the following:

		(() => {
			"use strict";
			
			// --------------------------------
			// View model for view directive
			// --------------------------------
			let view = {};
			view.templateUrl = "home/home.view.tpl";
			
			// --------------------------------
			// Controller for view model
			// --------------------------------
			view.controller = function HomeController($log) {
				$log.debug("HomeView has loaded.");
			};
			
			// --------------------------------
			// View directive module
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

- The view route would look like this:

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
