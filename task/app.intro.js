"use strict";

const sh = require("shelljs");

// Load environment variables
require("dotenv").config();

const name = process.env.APP_NAME;
sh.exec("./node_modules/asciify/bin/asciify.js " + name + " -f rev");

console.log("Compiling app...\n\n");
sh.exec("sleep 1");
