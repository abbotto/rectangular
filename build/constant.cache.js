"use strict";

const fs = require("fs");
const tmpJS = "tmp/constants.js";
const lines = fs.readFileSync(".envrc").toString().split("\n");
let constants = "";
let kv;

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

constants = "export default angular.module(\"app.constant\", [])" + constants + ".name;";
fs.writeFile(tmpJS, constants);
