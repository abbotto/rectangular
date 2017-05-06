"use strict";

const fs = require("fs");
const args = process.argv.slice(2);
consty packageJSON = require(__dirname + "/package.json");

packageJSON.name = args[0];
packageJSON.description = args[1];
packageJSON.license = args[2];

fs.writeFile("package.json", JSON.stringify(packageJSON));
