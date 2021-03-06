"use strict";

const fs = require("fs");
const args = process.argv.slice(2);
const packageJSON = require(__dirname + "/package.json");

packageJSON.name = args[0];
packageJSON.description = args[1];
packageJSON.license = args[2];
packageJSON.author = args[3];

fs.writeFile(__dirname + "/package.json", JSON.stringify(packageJSON));
