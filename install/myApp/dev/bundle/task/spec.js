"use strict";

const camelCase = require("camelcase");
const fs = require("fs");
const glob = require("glob-concat");
const path = require("path");
const parseAssets = require("../../../dev/utility/parseAssets.js");

module.exports = function spec(deps, root) {
	const spec = (parseAssets(deps));
	const imports = [];
	const tmpSpecJs = root + "/tmp/spec.auto.js";

	spec.forEach((filePath, i) => {
		spec[i] = filePath.replace("./", root + "/");
	});
	
	const specFiles = glob.sync(spec);
	
	specFiles.forEach((file) => {
		const name = path.basename(file).replace(".js", "");
		imports.push("import " + camelCase(name) + " from \"" + file.replace(root + "/", "~/") + "\";");
	});

	fs.writeFile(tmpSpecJs, imports.join(""));
};
