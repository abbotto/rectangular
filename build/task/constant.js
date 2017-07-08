"use strict";

const fs = require("fs");
const tmpConstantsJs = "tmp/constants.js";

let kv;
let constants = "";

module.exports = function image() {
	const lines = fs.readFileSync(".envrc")
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

	constants = "export default angular.module(\"app.constant\", [])" + constants + ";";
	fs.writeFile(tmpConstantsJs, constants);
};
