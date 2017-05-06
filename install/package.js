"use strict";

const fs = require("fs");
const args = process.argv.slice(2);

let packageJSON = require(__dirname + "/package.json");

packageJSON.name = args[0];
packageJSON.description = args[1];

packageJSON = JSON.stringify(packageJSON);

fs.writeFile("package.json", packageJSON);
