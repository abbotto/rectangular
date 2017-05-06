"use strict";

const fs = require("fs");
let packageJSON = require("./../tmp/project/package.json");

packageJSON.name = process.argv[0];
packageJSON.description = process.argv[1];

packageJSON = JSON.stringify(packageJSON);

fs.writeFile("tmp/project/package.json", packageJSON);
