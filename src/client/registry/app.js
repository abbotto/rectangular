/* eslint-plugin-disable angular */
// --------------------------------
// App
// --------------------------------
angular.module("app", [
	"app.constant",
	"app.controller",
	"app.route",
	"app.service",
	"app.template",
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
