module.exports = { contents: "\n\"use strict\";\n\nconst component$ = {};\n\nexport default function reactVendorService($rootScope) {\n\tcomponent$.render = (name, model) => {\n\t\t$rootScope[name] = model;\n\t};\n\n\treturn component$;\n};",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1498604735000
};