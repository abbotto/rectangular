module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar app_route_js_1 = require(\"app/app.route.js\");\n// Auto-generated files\nvar constants_js_1 = require(\"constants.js\");\nvar app_service_js_1 = require(\"app.service.js\");\nvar templates_js_1 = require(\"templates.js\");\nangular.module(\"app\", [constants_js_1.default.name, app_service_js_1.default.name, app_route_js_1.default.name, templates_js_1.default.name, \"ngAnimate\", \"ngAria\", \"ngMessages\", \"ngSanitize\"]).config(function ($locationProvider) {\n    $locationProvider.html5Mode(true);\n}).config(function ($logProvider, NODE_ENV) {\n    if (NODE_ENV === \"development\")\n        $logProvider.debugEnabled(true);\n});\n",
dependencies: ["app/app.route.js","constants.js","app.service.js","templates.js"],
sourceMap: {},
headerContent: undefined,
mtime: 1498604735000
};