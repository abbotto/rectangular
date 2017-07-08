"use strict";

const fs = require("fs");

let kv;
let constants = "";

module.exports = function env(fileName, root) {
	const tmpEnvJs = root + "/tmp/env.auto.js";
	fileName = root + "/" + fileName;
	
	const lines = fs.readFileSync(fileName)
		.toString()
		.split("\n")
	;
	
	lines.forEach((line) => {
		kv = line.split("=");
		// Non-strings
		try {
			JSON.parse(kv[1]);
		}
		// Strings
		catch (e) {
			kv[1] = "\"" + kv[1] + "\"";
		}
		constants += ".constant(\"" + kv[0] + "\", " + kv[1] + ")";
	});

	constants = "export default angular.module(\"env.auto\", [])" + constants + ";";
	fs.writeFile(tmpEnvJs, constants);
};
