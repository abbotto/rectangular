"use strict";

const fs = require("fs");
let packageJSON = JSON.parse(require("./../tmp/project/package.json"));

packageJSON.name = process.argv(0);
packageJSON.description = process.argv(1);

// Update paths to point to the root project directory
packageJSON = JSON.stringify(packageJSON);

fs.writeFile("tmp/project/package.json", packageJSON);
