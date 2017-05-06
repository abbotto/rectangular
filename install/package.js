"use strict";

const fs = require("fs");
const packageJSON = require("./../tmp/project/package.json");

packageJSON.name = process.argv[0];
packageJSON.description = process.argv[1];

fs.writeFile("tmp/project/package.json", packageJSON);
