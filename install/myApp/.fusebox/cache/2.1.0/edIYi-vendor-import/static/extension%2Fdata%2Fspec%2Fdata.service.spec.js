module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar data_service_js_1 = require(\"app/extension/data/data.service.js\");\nvar data$;\ndescribe(\"data.service\", function () {\n    beforeEach(function () {\n        data$ = data_service_js_1.default;\n    });\n    describe(\"When the `immutable` package is installed\", function () {\n        it(\"the `data$` service should be available\", function () {\n            expect(data$).toBeDefined();\n            expect(typeof data$).toBe(\"object\");\n        });\n    });\n});\n",
dependencies: ["app/extension/data/data.service.js"],
sourceMap: {},
headerContent: undefined,
mtime: 1498604735000
};