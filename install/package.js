"use strict";

const fs = require("fs");
let packageJSON = require("./../tmp/project/package.json");

packageJSON.name = process.argv[2];
packageJSON.description = process.argv[3];

packageJSON = JSON.stringify(packageJSON);

fs.writeFile("tmp/project/package.json", packageJSON);
