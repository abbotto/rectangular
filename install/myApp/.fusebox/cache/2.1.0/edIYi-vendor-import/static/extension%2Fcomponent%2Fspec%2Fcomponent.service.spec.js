module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar component_service_js_1 = require(\"app/extension/component/component.service.js\");\nvar component$;\ndescribe(\"component.service\", function () {\n    beforeEach(function () {\n        component$ = component_service_js_1.default;\n    });\n    describe(\"When the `react` package is installed\", function () {\n        it(\"the `component$` service should be available\", function () {\n            expect(component$).toBeDefined();\n            expect(typeof component$).toBe(\"function\");\n        });\n    });\n});\n",
dependencies: ["app/extension/component/component.service.js"],
sourceMap: {},
headerContent: undefined,
mtime: 1498604735000
};