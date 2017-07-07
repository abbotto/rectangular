module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar todo_list_component_js_1 = require(\"app/component/todo-list/todo-list.component.js\");\nfunction HomeComponentController(component$, data$) {\n    var vm = this;\n    vm.projectName = \"Rectangular\";\n    // Initialize TodoList component\n    todo_list_component_js_1.default(component$, vm, data$);\n}\nexports.default = HomeComponentController;\n;\n",
dependencies: ["app/component/todo-list/todo-list.component.js"],
sourceMap: {},
headerContent: undefined,
mtime: 1498604735000
};