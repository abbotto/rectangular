// --------------------------------
// App
// --------------------------------
angular.module("app", [
	"app.constants",
	"app.controllers",
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
.config(($logProvider, NODE_ENV) => {
	if (NODE_ENV === "development") $logProvider.debugEnabled(true);
});
