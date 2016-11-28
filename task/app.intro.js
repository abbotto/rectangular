const sh = require("shelljs");
sh.exec("./node_modules/asciify/bin/asciify.js 'Rectangular' -f rev");
console.log("Compiling app...\n\n");
sh.exec("sleep 1");