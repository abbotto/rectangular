module.exports = { contents: "\"use strict\";\n\nimport appRoute from \"app/app.route.js\";\n\n// Auto-generated files\nimport appConstant from \"constants.js\";\nimport appService from \"app.service.js\";\nimport appTemplate from \"templates.js\";\n\nangular.module(\"app\", [appConstant.name, appService.name, appRoute.name, appTemplate.name, \"ngAnimate\", \"ngAria\", \"ngMessages\", \"ngSanitize\"]).config($locationProvider => {\n\t$locationProvider.html5Mode(true);\n}).config(($logProvider, NODE_ENV) => {\n\tif (NODE_ENV === \"development\") $logProvider.debugEnabled(true);\n});",
dependencies: ["app/app.route.js","constants.js","app.service.js","templates.js"],
sourceMap: {},
headerContent: undefined,
mtime: 1498604735000
};