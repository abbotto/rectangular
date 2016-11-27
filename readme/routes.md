## Routes
- Routes are used to guide the users throught the application.
- The structure of a route path is this: `{{component}}/{{template}}.tpl`.

### Example
- A `route` looks something like this:

		(() => {
			"use strict";
			
			// --------------------------------
			// Define the route
			// --------------------------------
			const HomeRoute = function HomeRoute($router) {
				$router.config([{
					"path": "/",
					"component": "home"
				}]);
			};
			
			// --------------------------------
			// Inject the $router service
			// --------------------------------
			HomeRoute.$inject = ["$router"];
			
			// --------------------------------
			// Define the route module
			// --------------------------------
			angular.module("home.route", [
				// Inject the view
				"home.view"
			])
			.controller("HomeRoute", HomeRoute);
		})();