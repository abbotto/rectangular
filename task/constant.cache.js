"use strict";

const finder = require("glob-concat");
const fs = require("fs");
const sh = require("shelljs");

const mixin = finder.sync(["./src/client/**/*.mixin.json"]);
const data = finder.sync(["./src/client/**/*.data.json"]);
const tmpJS = "tmp/constants.js";
const lines = fs.readFileSync(".envrc").toString().split("\n");
let kv, constants = "";

lines.forEach((line) => {
	kv = line.split("=");
	// Non-strings
	try {
		JSON.parse(kv[1]);
	}
	// Strings
	catch(e) {
		kv[1] = "\"" + kv[1] + "\"";
	}
	constants += ".constant(\"" + kv[0] + "\", " + kv[1] + ")";
});

constants = "(function(){angular.module(\"app.constant\", [])" + constants + "})();";
fs.writeFile(tmpJS, constants);
