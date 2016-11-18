// --------------------------------
// App
// --------------------------------
const app = angular.module(
	"app", [
		"app.constants",
		"app.controllers",
		"app.directives",
		"app.filters",
		"app.routes",
		"app.services",
		"app.templates",
		"ngAria",
		"ngAnimate",
		"ngMessages"
	])
	.config($locationProvider => {
		$locationProvider.html5Mode(true);
	})
;
