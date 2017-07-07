module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar component_service_js_1 = require(\"app/extension/component/component.service.js\");\nvar react_vendor_directive_js_1 = require(\"app/extension/component/react.vendor.directive.js\");\nexports.default = angular.module(\"component.directive\", [component_service_js_1.default.name]).directive(\"component\", react_vendor_directive_js_1.default);\n",
dependencies: ["app/extension/component/component.service.js","app/extension/component/react.vendor.directive.js"],
sourceMap: {},
headerContent: undefined,
mtime: 1498604735000
};