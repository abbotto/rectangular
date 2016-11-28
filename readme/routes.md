## Routes
- Routes are used to guide the users throught the application.
- The structure of a route path is this: `{{component}}/{{template}}.tpl`.

### Example
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
