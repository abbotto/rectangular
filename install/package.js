"use strict";

const fs = require("fs");
const sh = require("shelljs");
const args = process.argv.slice(2);

sh.exec("curl -O https://raw.githubusercontent.com/abbotto/rectangular/master/install/project/package.json");
let packageJSON = require(__dirname + "/package.json");

packageJSON.name = args[0];
packageJSON.description = args[1];

packageJSON = JSON.stringify(packageJSON);

fs.writeFile(__dirname + "/package.json", packageJSON);
