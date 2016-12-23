const sh = require("shelljs");

// Load environment variables
require("dotenv").config();

sh.exec("./node_modules/asciify/bin/asciify.js process.env.APP_NAME -f rev");
console.log("Compiling app...\n\n");
sh.exec("sleep 1");
