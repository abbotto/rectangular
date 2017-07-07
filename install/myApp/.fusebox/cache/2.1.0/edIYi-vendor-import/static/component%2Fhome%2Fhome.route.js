module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar home_component_js_1 = require(\"app/component/home/home.component.js\");\nexports.default = angular.module(\"home.route\", [home_component_js_1.default.name]).config(function ($stateProvider) {\n    $stateProvider.state(\"home\", {\n        url: \"/\",\n        template: \"<home></home>\"\n    });\n});\n",
dependencies: ["app/component/home/home.component.js"],
sourceMap: {},
headerContent: undefined,
mtime: 1498604735000
};